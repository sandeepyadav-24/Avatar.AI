import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { User } from "../db/index";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "User created successfully", token });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(`${email} , ${password}`);
  const user = await User.findOne({ email, password });
  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid email or password" });
  }
});

router.get("/me", authenticateJwt, async (req, res) => {
  const userId = req.headers["userId"];
  const user = await User.findOne({ _id: userId });
  if (user) {
    res.json({ username: user.email });
  } else {
    res.status(403).json({ message: "User not logged in" });
  }
});

export default router;
