import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authorized({ auth, request: { nextUrl } }) {
      //   const isLoggedIn = !!auth?.user;

      const isLoggedIn = true;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        return isLoggedIn
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
