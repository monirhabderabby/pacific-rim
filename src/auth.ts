import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        if (!credentials) return null;
        const user = {
          email: "raj021159@gmail.com",
          password: "12345678",
        };

        console.log("credentials from auth.ts", credentials);

        // validating login via api here

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          return user;
        }
        throw new Error("Invalid credentials.");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      return false;
    },
    async session({ session, token }) {
      if (token) {
        return session;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
