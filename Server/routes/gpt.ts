import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { OpenAI } from "openai";

const router = express.Router();

router.post("/tweet", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  console.log(journal);
  const search = journal;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `convert  this ${search} in tweet (charcter should less than 250 character) so give me 4 tweet from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const result = response.choices[0].message.content;
  console.log(result);
  res.status(201).json({ message: result });
});

export default router;
