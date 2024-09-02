import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await connectToDatabase();

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ token });
    } catch (error) {
      console.error("Login error:", error); // Log the error for debugging
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(405).json({ message: "Method not allowed" });
  }
}
