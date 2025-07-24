import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLanding = nextUrl.pathname === "/";
      const isOnLogin = nextUrl.pathname === "/login";
      const isOnRegister = nextUrl.pathname === "/register";

      // If the user is authorized and tries to get to login/register - redirect from there
      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Allowing access to the landing and registration for unauthorized users
      if (isOnLanding || isOnRegister || isOnLogin) {
        return true;
      }

      // For all other pages we check authorization
      return isLoggedIn;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
