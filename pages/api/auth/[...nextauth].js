import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("gameheaven");

        // ইউজার খুঁজো
        const user = await db.collection("users").findOne({ email: credentials.email });
        if (!user) {
          throw new Error("❌ User not found");
        }

        // পাসওয়ার্ড চেক করো
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("❌ Wrong password");
        }

        return { id: user._id, name: user.name, email: user.email };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
