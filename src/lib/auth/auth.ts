// import { cookies } from "next/headers";
import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { login, userGetCurrent } from "@/lib/fetch/v2";
import { ErrorCode } from "@/lib/definitions/constants";
import { ResponseData } from "@/lib/definitions/technofest";
import { getServerSanctumToken } from "@/lib/utils/common";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with the their profile data
        return user;
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
      if (trigger === "signIn") {
        const response: ResponseData<User> = await userGetCurrent(
          (await getServerSanctumToken()) as string,
        );

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
});
