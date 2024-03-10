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
const db_1 = require("../db");
const db_2 = require("../db");
const db_3 = require("../db");
const router = express_1.default.Router();
router.post("/todos", index_1.authenticateJwt, (req, res) => {
    const { title, description } = req.body;
    const done = false;
    const userId = req.headers["userId"];
    const newTodo = new db_1.Todo({ title, description, done, userId });
    newTodo
        .save()
        .then((savedTodo) => {
        res.status(201).json(savedTodo);
    })
        .catch((err) => {
        res.status(500).json({ error: "Failed to create a new todo" });
    });
});
router.get("/todos", index_1.authenticateJwt, (req, res) => {
    const userId = req.headers["userId"];
    db_1.Todo.find({ userId })
        .then((todos) => {
        res.json(todos);
    })
        .catch((err) => {
        res.status(500).json({ error: "Failed to retrieve todos" });
    });
});
router.patch("/todos/:todoId/done", index_1.authenticateJwt, (req, res) => {
    const { todoId } = req.params;
    const userId = req.headers["userId"];
    db_1.Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true })
        .then((updatedTodo) => {
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updatedTodo);
    })
        .catch((err) => {
        res.status(500).json({ error: "Failed to update todo" });
    });
});
router.post("/api/history", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ error: "Content is required" });
        }
        // Create a new history entry
        const newHistoryEntry = new db_2.History({ content });
        // Save the entry to the database
        yield newHistoryEntry.save();
        res.status(201).json({ message: "History entry saved successfully" });
    }
    catch (error) {
        console.error("Error saving history entry:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
// Route to get all content from the backend
router.get("/api/get-content", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve all entries from the database
        const allContent = yield db_2.History.find();
        // Return the array of content
        res.status(200).json({ contentArray: allContent });
    }
    catch (error) {
        console.error("Error getting content:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/api/save-tokens", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { twitterToken, linkedinToken, mediumToken, quoraToken, hashnodeToken, } = req.body;
        // Save tokens for each platform
        yield saveTokens("Twitter", twitterToken);
        yield saveTokens("LinkedIn", linkedinToken);
        yield saveTokens("Medium", mediumToken);
        yield saveTokens("Quora", quoraToken);
        yield saveTokens("Hashnode", hashnodeToken);
        // Add more platform tokens as needed
        res.status(201).json({ message: "Tokens saved successfully" });
    }
    catch (error) {
        console.error("Error saving tokens:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
// Helper function to save tokens for a specific platform
function saveTokens(platform, tokens) {
    return __awaiter(this, void 0, void 0, function* () {
        const [apiKey, apiSecret, accessToken, accessSecret] = tokens;
        const newToken = new db_3.TokenModel({
            platform,
            apiKey,
            apiSecret,
            accessToken,
            accessSecret,
        });
        yield newToken.save();
    });
}
exports.default = router;
