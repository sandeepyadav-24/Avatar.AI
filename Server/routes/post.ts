{
  /**import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
//import { twitterClient } from "../services/twitterClient";
import { TwitterApi } from "twitter-api-v2";
const router = express.Router();
require("dotenv").config({ path: __dirname + "/.env" });

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
} as any);

const rwClient = twitterClient.readWrite;

router.post("/twitter", authenticateJwt, async (req, res) => {
  const { tweetMessage } = req.body;
  const tweet = async () => {
    if (!tweetMessage) {
      return res.status(400).json({ message: "Tweet content is missing" });
    }
    try {
      const response = await rwClient.v2.tweet(tweetMessage);
      res
        .status(200)
        .json({ message: "Tweet posted successfully", data: response });
    } catch (error) {
      res.status(500).json({ message: "Failed to post tweet", error: error });
    }
  };

  tweet();
});

export default router;
 */
}
