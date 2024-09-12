import express from "express";
import MessageModel from "../models/MessageModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
  res.send("API is running");
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new MessageModel({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Data submitted successfully" });
    console.log(newMessage);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
