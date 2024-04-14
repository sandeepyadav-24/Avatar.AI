import express from "express";
import Replicate from "replicate";
const replicate = new Replicate();
import { authenticateJwt, SECRET } from "../middleware/index";

import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/imageGen", authenticateJwt, async (req, res) => {
  // Getting Prompt from Users
  const { journal } = req.body;

  console.log("Running the model...");
  // Running the MOdel
  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
      },
    }
  );
  res.status(201).json(output);
});

export default router;
