import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";
import connectMongo from "./libs/mongoose";
import User from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "no-reply@resend.rcmcodes.com",
      name: "Email",
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  events: {
    async createUser({ user }) {
      await connectMongo();
      const adminEmails = process.env.ADMIN_EMAILS
        ? process.env.ADMIN_EMAILS.split(",")
        : [];
      const isAdminEmail = adminEmails.includes(user.email);
      try {
        const updatedUser = await User.findByIdAndUpdate(
          user.id,
          { role: isAdminEmail ? "admin" : "user" },
          { new: true }
        );
        console.log("Updated user role:", updatedUser);
      } catch (error) {
        console.error("Error updating user role:", error);
      }
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("User in jwt callback:", user);
        const validRoles = ["admin", "user"];
        token.role = validRoles.includes(user.role) ? user.role : "user";
      }

      if (!token.role) {
        await connectMongo();
        const dbUser = await User.findOne({ email: token.email });
        token.role = dbUser?.role || "user";
      }
      console.log("Token in jwt callback", token);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token?.role || "user";
      }
      // console.log("Session in session callback:", session);
      return session;
    },
  },
});
