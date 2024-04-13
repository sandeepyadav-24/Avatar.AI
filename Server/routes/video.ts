import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();

router.post("/video", authenticateJwt, async (req, res) => {
  const { journal, time } = req.body;

  const search = journal;
  const promptGen = `generate a nice script from this ${search} like  a person have to explain all this in youtube video and generate content for ${time} seconds `;

  const apiKey = "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  const genAI = new GoogleGenerativeAI(apiKey);
  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = promptGen;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    //console.log(text);
    const arr = [text];
    res.status(201).json(arr);
  }

  run();
});
