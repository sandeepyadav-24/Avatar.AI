import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { Todo } from "../db";
import { History } from "../db";
import { TokenModel } from "../db";
type Platform = "Twitter" | "LinkedIn" | "Medium" | "Quora" | "Hashnode";

const router = express.Router();

router.post("/todos", authenticateJwt, (req, res) => {
  const { title, description } = req.body;
  const done = false;
  const userId = req.headers["userId"];

  const newTodo = new Todo({ title, description, done, userId });

  newTodo
    .save()
    .then((savedTodo) => {
      res.status(201).json(savedTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new todo" });
    });
});

router.get("/todos", authenticateJwt, (req, res) => {
  const userId = req.headers["userId"];

  Todo.find({ userId })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve todos" });
    });
});

router.patch("/todos/:todoId/done", authenticateJwt, (req, res) => {
  const { todoId } = req.params;
  const userId = req.headers["userId"];

  Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true })
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

router.post("/api/history", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    // Create a new history entry
    const newHistoryEntry = new History({ content });

    // Save the entry to the database
    await newHistoryEntry.save();
    res.status(201).json({ message: "History entry saved successfully" });
  } catch (error) {
    console.error("Error saving history entry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all content from the backend
router.get("/api/get-content", async (req, res) => {
  try {
    // Retrieve all entries from the database
    const allContent = await History.find();

    // Return the array of content
    res.status(200).json({ contentArray: allContent });
  } catch (error) {
    console.error("Error getting content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/api/save-tokens", async (req, res) => {
  try {
    const {
      twitterToken,
      linkedinToken,
      mediumToken,
      quoraToken,
      hashnodeToken,
    } = req.body;

    // Save tokens for each platform
    await saveTokens("Twitter", twitterToken);
    await saveTokens("LinkedIn", linkedinToken);
    await saveTokens("Medium", mediumToken);
    await saveTokens("Quora", quoraToken);
    await saveTokens("Hashnode", hashnodeToken);
    // Add more platform tokens as needed

    res.status(201).json({ message: "Tokens saved successfully" });
  } catch (error) {
    console.error("Error saving tokens:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Helper function to save tokens for a specific platform
async function saveTokens(platform: Platform, tokens: string[]) {
  const [apiKey, apiSecret, accessToken, accessSecret] = tokens;

  const newToken = new TokenModel({
    platform,
    apiKey,
    apiSecret,
    accessToken,
    accessSecret,
  });

  await newToken.save();
}

export default router;
