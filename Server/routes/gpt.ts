import express from "express";
const router = express.Router();
import dotenv from "dotenv";
import { authenticateJwt, SECRET } from "../middleware/index";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Route for the Twitter

router.post("/tweet", authenticateJwt, async (req, res) => {
  const { journal } = req.body;

  const search = journal;
  const promptGen = `convert  this ${search} in twitter post  which should have less than 100  character`;

  const apiKey =
    process.env.GEMINI_API_KEY ?? "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  const genAI = new GoogleGenerativeAI(apiKey);

  // Run function which Generate the The AI Answer
  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = promptGen;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const arr = [text];

    res.status(201).json(arr);
  }

  run();
});

// Post Route for the LinkedIn

router.post("/linkedin", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  // Prompt Gen
  const promptGen = `convert  this ${search} in linkedin post  which should have less than 1000  character and more than 800 character`;
  // API_KEY
  const apiKey =
    process.env.GEMINI_API_KEY ?? "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  // GEN AI
  const genAI = new GoogleGenerativeAI(apiKey);

  // Run function which Generate the The AI Answer
  async function run() {
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

// Post Route for the Medium

router.post("/medium", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  const promptGen = `convert  this ${search} in medium post  which should have less than 10000  character and greater than 6000 character`;

  const apiKey = "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  const genAI = new GoogleGenerativeAI(apiKey);

  // Run function which Generate the The AI Answer
  async function run() {
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

// Post Route for the Hashnode

router.post("/hashnode", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  const promptGen = `convert  this ${search} in hashnode  blog  which should have less than 10000  character and greater than 6000 character`;

  const apiKey =
    process.env.GEMINI_API_KEY ?? "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  const genAI = new GoogleGenerativeAI(apiKey);

  // Run function which Generate the The AI Answer
  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = promptGen;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const arr = [text];
    res.status(201).json(arr);
  }

  run();
});

export default router;
