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
//import { twitterClient } from "../services/twitterClient";
const twitter_api_v2_1 = require("twitter-api-v2");
const router = express_1.default.Router();
require("dotenv").config({ path: __dirname + "/.env" });
const twitterClient = new twitter_api_v2_1.TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
});
const rwClient = twitterClient.readWrite;
router.post("/twitter", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetMessage } = req.body;
    const tweet = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!tweetMessage) {
            return res.status(400).json({ message: "Tweet content is missing" });
        }
        try {
            const response = yield rwClient.v2.tweet(tweetMessage);
            res
                .status(200)
                .json({ message: "Tweet posted successfully", data: response });
        }
        catch (error) {
            res.status(500).json({ message: "Failed to post tweet", error: error });
        }
    });
    tweet();
}));
exports.default = router;
