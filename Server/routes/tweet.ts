import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
//import { twitterClient } from "../services/twitterClient";
const router = express.Router();
require("dotenv").config({ path: __dirname + "/.env" });

router.post("/push", authenticateJwt, async (req, res) => {
  const { tweetMessage } = req.body;
  const tweet = async () => {
    try {
      //await twitterClient.v2.tweet(tweetMessage);
      res.status(200).json({ message: "Tweeted Successsfully" });
    } catch (e) {
      console.log(e);
      res.status(200).json({ message: "Unsuccessfull" });
    }
  };

  tweet();
});

export default router;
