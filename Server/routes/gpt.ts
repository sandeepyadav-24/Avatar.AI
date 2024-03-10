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

router.post("/linkedin", authenticateJwt, async (req, res) => {
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
        content: `convert  this ${search} in linkedin post  which should have more than 2000 character and less than 2000 character   so give me 4 linkedin post  from this journal and 4 should be perfect and include inportant learning and things so give me in a arry form `,
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
  res.status(201).json({ message: result });
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
  res.status(201).json({ message: result });
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
