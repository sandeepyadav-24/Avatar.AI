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
const router = express_1.default.Router();
const index_1 = require("../middleware/index");
const generative_ai_1 = require("@google/generative-ai");
// Route for the Twitter
router.post("/tweet", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { journal } = req.body;
    const search = journal;
    const promptGen = `convert  this ${search} in twitter post  which should have less than 100  character`;
    const apiKey = (_a = process.env.GEMINI_API_KEY) !== null && _a !== void 0 ? _a : "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    // Run function which Generate the The AI Answer
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = promptGen;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            const arr = [text];
            res.status(201).json(arr);
        });
    }
    run();
}));
// Post Route for the LinkedIn
router.post("/linkedin", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { journal } = req.body;
    //console.log(journal);
    const search = journal;
    // Prompt Gen
    const promptGen = `convert  this ${search} in linkedin post  which should have less than 1000  character and more than 800 character`;
    // API_KEY
    const apiKey = (_b = process.env.GEMINI_API_KEY) !== null && _b !== void 0 ? _b : "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
    // GEN AI
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    // Run function which Generate the The AI Answer
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = promptGen;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            //console.log(text);
            const arr = [text];
            res.status(201).json(arr);
        });
    }
    run();
}));
// Post Route for the Medium
router.post("/medium", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { journal } = req.body;
    //console.log(journal);
    const search = journal;
    const promptGen = `convert  this ${search} in medium post  which should have less than 10000  character and greater than 6000 character`;
    const apiKey = "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    // Run function which Generate the The AI Answer
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = promptGen;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            //console.log(text);
            const arr = [text];
            res.status(201).json(arr);
        });
    }
    run();
}));
// Post Route for the Hashnode
router.post("/hashnode", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { journal } = req.body;
    //console.log(journal);
    const search = journal;
    const promptGen = `convert  this ${search} in hashnode  blog  which should have less than 10000  character and greater than 6000 character`;
    const apiKey = (_c = process.env.GEMINI_API_KEY) !== null && _c !== void 0 ? _c : "AIzaSyCwdyAD8Lz08sqcL3rwCv1VRLNAViszcgc";
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    // Run function which Generate the The AI Answer
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = promptGen;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            const arr = [text];
            res.status(201).json(arr);
        });
    }
    run();
}));
exports.default = router;
