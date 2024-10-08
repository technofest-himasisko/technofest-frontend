import { type DefaultSession } from "next-auth";
import { User } from "@/lib/definitions/technofest";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: User;
  }
}
