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
const twitterClient_1 = require("../services/twitterClient");
const router = express_1.default.Router();
require("dotenv").config({ path: __dirname + "/.env" });
router.post("/push", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetMessage } = req.body;
    const tweet = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield twitterClient_1.twitterClient.v2.tweet(tweetMessage);
            res.status(200).json({ message: "Tweeted Successsfully" });
        }
        catch (e) {
            console.log(e);
            res.status(200).json({ message: "Unsuccessfull" });
        }
    });
    tweet();
}));
exports.default = router;
