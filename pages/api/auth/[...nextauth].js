import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
providers: [
CredentialsProvider({
name: "Credentials",
credentials: {
email: { label: "Email", type: "email" },
password: { label: "Password", type: "password" },
},
async authorize(credentials) {
const { email, password } = credentials || {};
// Demo users (no DB yet)
const users = [
{ id: "1", name: "Admin", email: "admin@example.com", password: "Admin@123", role: "admin" },
{ id: "2", name: "User", email: "user@example.com", password: "User@123", role: "user" },
];
const found = users.find(u => u.email === email && u.password === password);
if (!found) return null;
return { id: found.id, name: found.name, email: found.email, role: found.role };
},
}),
],
session: { strategy: "jwt" },
pages: { signIn: "/login" },
secret: process.env.NEXTAUTH_SECRET,
});
