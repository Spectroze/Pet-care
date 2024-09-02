import { dbConnect } from "@/app/lib/db";
import PostModel from "../../models/PostModel";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("hit post", new Date().getSeconds());
    try {
      await dbConnect();
      const post = await PostModel.create({ name: "post double render" });
      res.status(200).json({ message: "Posted" });
    } catch (error) {
      console.error("Error from route:", error);
      res.status(500).json({ message: "Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
