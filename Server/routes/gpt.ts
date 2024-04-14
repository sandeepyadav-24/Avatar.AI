import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { History } from "../db";

const router = express.Router();

router.post("/tweet", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  const promptGen = `convert  this ${search} in twitter post  which should have less than 200  character`;

  const apiKey = "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  const genAI = new GoogleGenerativeAI(apiKey);
  async function run() {
    // For text-only input, use the gemini-pro model
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

router.post("/linkedin", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  // Prompt Gen
  const promptGen = `convert  this ${search} in linkedin post  which should have less than 1000  character and more than 800 character`;
  // API_KEY
  const apiKey = "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
  // GEN AI
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

router.post("/facebook", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in facebook post  (charcter should less than 5000 character) so give me 4 facebook post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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

router.post("/youtube", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in youtube post  (charcter should less than 10000 character) so give me 4 youtube post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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

router.post("/medium", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  const promptGen = `convert  this ${search} in medium post  which should have less than 10000  character and greater than 6000 character`;

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

  /*const { journal } = req.body;
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
        content: `convert  this ${search} in medium post  (charcter should less than 10000 character)  and it should be perfect and include inportant learning `,
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
  res.status(201).json({ message: result }); --*/
});

router.post("/dev", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in dev post  (charcter should less than 10000 character) so give me 4 dev post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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

router.post("/hashnode", authenticateJwt, async (req, res) => {
  const { journal } = req.body;
  //console.log(journal);
  const search = journal;
  const promptGen = `convert  this ${search} in hashnode  blog  which should have less than 10000  character and greater than 6000 character`;

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
  {
    /**const { journal } = req.body;
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
        content: `convert  this ${search} in hashnode post  (charcter should less than 10000 character and greater than 7000 character)  `,
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
  res.status(201).json({ message: result }); */
  }
});

router.post("/quora", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in quora post  (charcter should less than 20000 character and greater than 15000 character)  `,
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

router.post("/reddit", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in reddit post  (charcter should less than 40000 character and greater than 30000 character) so give me 4 reddit post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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

router.post("/email", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in email  (charcter should less than 10000 character and greater than 7000 character) so give me 4 email post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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
