// pages/api/signup.js
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, fullName } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const client = await clientPromise;
      const db = client.db("petcare-app");
      const users = db.collection("users");

      // Check if user already exists
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create the new user
      await users.insertOne({
        email,
        password: hashedPassword,
        fullName,
      });

      res.status(201).json({ message: "User created successfully." });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
