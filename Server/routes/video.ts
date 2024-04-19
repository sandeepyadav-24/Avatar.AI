import express from "express";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { authenticateJwt, SECRET } from "../middleware/index";
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();

router.post("/script", authenticateJwt, async (req, res) => {
  //const { prompt, time } = req.body;
  //const { journal, time } = req.body;

  const prompt =
    "I am building a product for developers The whole product is divided into 3 parts the first part is my platform will automate all Tasks for posting things  with tech like the developer made something in a day or working in any project and wanting to advertise their recent project and want people to use it so basically developer can write their head out in a simple text editor and then with just a push of a button all content converted into a tweet and automatically will get a post to Twitter and create a nice linden post with help of ml and automatically post on LinkedIn and do the same thing with other social media platform which is already integrated with the platform and our platform also give an image feature like you also want a picture for a particular post then our model also create a picture on the basis of post and give them a link so this is just the first phase now come to the second phase where we are working with video platform like  YouTube so if any user build some project and wanted to share a video explaining the project so our platform will do end to end work like user just need to give a nice journal about their project  and then platform will create a nice script for that project and then convert that script into a voice and that voice is fine tuned with your voice so it sounds very real and then we will sync that voice with your photo and do lip sync and eyes sync with that video and create a nice video from that and give display the way after rendering and after cross check and user can click on post then automatically that video will get post on YouTube so this will save a lot of time of a user an dour main aim is to eliminate every task which can be done by ai and only focus on high things and now come to the third phase that will do everything with meeting so we categories this section into 2 parts first one is meeting in which user don't have to interact only have to listen and user attend that meeting just for knowledge so in that part we will give a user a nice points that in meeting these are the topics in which host talk about and a brief notes of that meet so you don't have to attend the meet just for sake and if you have any doubt so user also can talk to meet notes that is given to user and the second part where user have to interact like user have a daily office meeting in the morning in which user have to present and discuss about their progress and what task they have to do today so our platform will eliminate the time taking process and automate everything so user come to our platform and choose meeting option and choose what type of meeting so if that a static meeting then simply paste the meet link in input box and submit and then when meet ends then simply comes to note section and can have. nice notes and can talk to notes and if user choose the interactive meet than user have to explain certain question like purpose of the meeting, explain about the host and what to talk about like work progress and other thang and after that submit meet link and wait till meet ends and then can have a really nice notes";

  const time = 300;
  const promptGen = `generate a nice script from this ${prompt} like  a person have to explain all this in youtube video and generate content for ${time} seconds `;

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = promptGen;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    /// OPEN AI PART
    const apiKey = process.env.OPENAI_API_KEY;
    const openai = new OpenAI({ apiKey });

    const speechFile = path.resolve("./speech.mp3");

    async function main() {
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: text,
      });
      //console.log(speechFile);
      const buffer = Buffer.from(await mp3.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);
      return buffer;
    }
    const voiceBuffer = await main();

    res.status(201).json(voiceBuffer);
  }

  run();
});

export default router;
