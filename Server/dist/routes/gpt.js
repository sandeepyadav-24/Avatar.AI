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
const index_1 = require("../middleware/index");
const openai_1 = require("openai");
const router = express_1.default.Router();
router.post("/tweet", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { journal } = req.body;
    console.log(journal);
    const search = journal;
    const openai = new openai_1.OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const response = yield openai.chat.completions.create({
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
}));
exports.default = router;
