import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
  userId: String,
});
const historySchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
});
const TokenSchema = new mongoose.Schema({
  platform: String,
  apiKey: String,
  apiSecret: String,
  accessToken: String,
  accessSecret: String,
});

export const User = mongoose.model("User", userSchema);
export const Todo = mongoose.model("Todo", todoSchema);
export const History = mongoose.model("History", historySchema);
export const TokenModel = mongoose.model("Token", TokenSchema);
