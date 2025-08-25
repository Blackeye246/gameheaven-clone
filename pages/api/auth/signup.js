import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ message: "Missing required fields" });
  }

  const client = await clientPromise;
  const db = client.db("gameheaven");
  const users = db.collection("users");

  const existingUser = await users.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }

  const hashedPassword = await hash(password, 12);

  const result = await users.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created", userId: result.insertedId });
}
