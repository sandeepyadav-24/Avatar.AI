"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = exports.History = exports.Todo = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: String,
    password: String,
});
const todoSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    done: Boolean,
    userId: String,
});
const historySchema = new mongoose_1.default.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now },
});
const TokenSchema = new mongoose_1.default.Schema({
    platform: String,
    apiKey: String,
    apiSecret: String,
    accessToken: String,
    accessSecret: String,
});
exports.User = mongoose_1.default.model("User", userSchema);
exports.Todo = mongoose_1.default.model("Todo", todoSchema);
exports.History = mongoose_1.default.model("History", historySchema);
exports.TokenModel = mongoose_1.default.model("Token", TokenSchema);
