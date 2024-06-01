import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";

export const config = {
  providers: [Google, Facebook, GitHub],
  pages: {
    signIn: "/",
  },
};

export const { signIn, signOut, handlers, auth } = NextAuth(config);
