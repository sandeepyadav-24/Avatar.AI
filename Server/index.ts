import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import gptRoutes from "./routes/gpt";
import tweetRoutes from "./routes/tweet";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.use("/gpt", gptRoutes);
app.use("/tweet", tweetRoutes);

app.listen(port, () => {
  console.log(`Post is listening at Port : ${port}`);
});

mongoose.connect(
  "mongodb+srv://sandeepyadav24:Welcome@cluster0.dlduovb.mongodb.net/"
);
