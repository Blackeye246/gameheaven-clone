import clientPromise from "../../../lib/mongodb";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const client = await clientPromise;
  const db = client.db("gameheaven");

  // ইউজার আগে আছে কিনা চেক করো
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // পাসওয়ার্ড হ্যাশ করে সেভ করো
  const hashedPassword = await hash(password, 10);
  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: "✅ User created successfully" });
}
