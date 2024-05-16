import express from "express";
const router = express.Router();

import { authenticateJwt } from "../middleware/index";

router.post("/linkedinpost", authenticateJwt, async (req, res) => {
  const { content } = req.body;

  console.log("Atleast i reached to my Backend");

  // Post Api for LinkedIn
  const postApi = "https://api.linkedin.com/v2/ugcPosts";

  // Auth for Linkedin
  const authForLinkedin = process.env.LINKEDIN_TOKEN;

  // Body for POsting Data
  const postBody = {
    author: "urn:li:person:AQJLGjnA4X",
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: content,
        },
        shareMediaCategory: "NONE",
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };
  // Run function To Post Data to Linkedin
  async function run() {
    {
      const response = await fetch(postApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Restli-Protocol-Version": "2.0.0",
          Authorization: `Bearer ${authForLinkedin}`,
        },
        body: JSON.stringify(postBody),
      });
      // Converting Data to Json
      const data = await response.json();
      // Sending response Back to Frontend
      res.status(201).json(data);
    }
  }

  run();
});

export default router;
