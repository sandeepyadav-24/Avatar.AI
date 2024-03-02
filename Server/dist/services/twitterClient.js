"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterBearer = exports.twitterClient = void 0;
const twitter_api_v2_1 = require("twitter-api-v2");
const client = new twitter_api_v2_1.TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
});
const bearer = new twitter_api_v2_1.TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.BEARER_TOKEN, // Use BEARER_TOKEN here
    accessSecret: process.env.ACCESS_SECRET, // It's okay to provide a placeholder value here, as it's not used for bearer token
});
exports.twitterClient = client.readWrite;
exports.twitterBearer = bearer.readOnly;
