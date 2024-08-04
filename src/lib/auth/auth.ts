import { ErrorCode } from "@/lib/definitions/constants";
import { ResponseData } from "@/lib/definitions/technofest";
import { attempt, login, userGetCurrent } from "@/lib/fetch/v2";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const response = await attempt(
          String(credentials?.email),
          String(credentials?.password),
          true,
        );

        if (response.status !== 200) {
          return null;
        }

        return {
          id: String(response.data?.user.id),
          name: response.data?.user.name,
          email: response.data?.user.email,
          image: response.data?.user.avatar,
          access_token: response.data?.access_token,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // @ts-ignore
      const { access_token } = user;

      if (!user.email) {
        return false;
      }

      const response = await login(
        user.name || "Partisipan",
        user.email,
        user.image || "",
        account?.provider!,
        account?.provider === "credentials"
          ? access_token
          : account?.access_token,
      );

      if (
        response.status === 401 &&
        response.error_code === ErrorCode.INVALID_ACCESS_TOKEN
      ) {
        return `/login?error=${ErrorCode.INVALID_ACCESS_TOKEN}`;
      }

      if (
        response.status === 409 &&
        response.error_code === ErrorCode.ACCOUNT_NOT_LINKED
      ) {
        return `/login?error=${ErrorCode.ACCOUNT_NOT_LINKED}`;
      }

      const { cookies } = await import("next/headers");

      cookies().set("sanctum-token", response.data?.access_token as string, {
        secure: true,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60,
      });

      return true;
    },
    async jwt({ token, trigger }) {
      if (trigger === "signIn" || trigger === "update") {
        const response: ResponseData<User> = await userGetCurrent([
          "userProfile",
        ]);

        token.user = response.data;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },
  events: {
    async signOut() {
      const { cookies } = await import("next/headers");

      cookies().set({
        name: "sanctum-token",
        value: "",
        expires: new Date("2016-10-05"), // lol
        path: "/",
      });
    },
  },
  pages: {
    signIn: "/login",
  },
});
