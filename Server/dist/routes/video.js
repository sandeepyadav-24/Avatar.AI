"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const openai_1 = __importDefault(require("openai"));
const index_1 = require("../middleware/index");
const generative_ai_1 = require("@google/generative-ai");
const router = express_1.default.Router();
router.post("/script", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const { prompt, time } = req.body;
    //const { journal, time } = req.body;
    const prompt = "I am building a product for developers The whole product is divided into 3 parts the first part is my platform will automate all Tasks for posting things  with tech like the developer made something in a day or working in any project and wanting to advertise their recent project and want people to use it so basically developer can write their head out in a simple text editor and then with just a push of a button all content converted into a tweet and automatically will get a post to Twitter and create a nice linden post with help of ml and automatically post on LinkedIn and do the same thing with other social media platform which is already integrated with the platform and our platform also give an image feature like you also want a picture for a particular post then our model also create a picture on the basis of post and give them a link so this is just the first phase now come to the second phase where we are working with video platform like  YouTube so if any user build some project and wanted to share a video explaining the project so our platform will do end to end work like user just need to give a nice journal about their project  and then platform will create a nice script for that project and then convert that script into a voice and that voice is fine tuned with your voice so it sounds very real and then we will sync that voice with your photo and do lip sync and eyes sync with that video and create a nice video from that and give display the way after rendering and after cross check and user can click on post then automatically that video will get post on YouTube so this will save a lot of time of a user an dour main aim is to eliminate every task which can be done by ai and only focus on high things and now come to the third phase that will do everything with meeting so we categories this section into 2 parts first one is meeting in which user don't have to interact only have to listen and user attend that meeting just for knowledge so in that part we will give a user a nice points that in meeting these are the topics in which host talk about and a brief notes of that meet so you don't have to attend the meet just for sake and if you have any doubt so user also can talk to meet notes that is given to user and the second part where user have to interact like user have a daily office meeting in the morning in which user have to present and discuss about their progress and what task they have to do today so our platform will eliminate the time taking process and automate everything so user come to our platform and choose meeting option and choose what type of meeting so if that a static meeting then simply paste the meet link in input box and submit and then when meet ends then simply comes to note section and can have. nice notes and can talk to notes and if user choose the interactive meet than user have to explain certain question like purpose of the meeting, explain about the host and what to talk about like work progress and other thang and after that submit meet link and wait till meet ends and then can have a really nice notes";
    const time = 300;
    const promptGen = `generate a nice script from this ${prompt} like  a person have to explain all this in youtube video and generate content for ${time} seconds `;
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = promptGen;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            /// OPEN AI PART
            const apiKey = process.env.OPENAI_API_KEY;
            const openai = new openai_1.default({ apiKey });
            const speechFile = path_1.default.resolve("./speech.mp3");
            function main() {
                return __awaiter(this, void 0, void 0, function* () {
                    const mp3 = yield openai.audio.speech.create({
                        model: "tts-1",
                        voice: "alloy",
                        input: text,
                    });
                    //console.log(speechFile);
                    const buffer = Buffer.from(yield mp3.arrayBuffer());
                    yield fs_1.default.promises.writeFile(speechFile, buffer);
                    return buffer;
                });
            }
            const voiceBuffer = yield main();
            res.status(201).json(voiceBuffer);
        });
    }
    run();
}));
exports.default = router;
