import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface TweetProps {
  tweet: string;
}
const TwitterPost: React.FC<TweetProps> = (props) => {
  const postHandler = async () => {
    // Replace the tweet content as needed
    const tweetContent = props.tweet;

    // URL encode the tweet content
    const encodedTweetContent = encodeURIComponent(tweetContent);
    // Make an API request to save the tweet content to your server
    await fetch("http://localhost:3000/todo/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweetContent }),
    });

    // Create the Tweet Intent link
    const tweetIntentLink = `https://twitter.com/intent/tweet?text=${encodedTweetContent}`;

    // Open the Twitter intent link in a new window
    window.open(tweetIntentLink, "_blank");
  };
  //const navigate = useNavigate();
  return (
    <div className="mx-10 py-1 ">
      <h1 className="font-bold text-[#799EFF] text-3xl  my-2 hover:text-white border-[#88B2FF] ">
        {"sandeepyadav24" || <Skeleton />}
      </h1>
      <h1 className="my-6 text-[#EFF4FF]   ">
        {props.tweet || <Skeleton count={5} />}{" "}
      </h1>
      <button
        className="bg-[#1B9CEC] text-2xl text-white py-2 mb-5 border-[#0080D0] border-2 px-32 rounded-md"
        onClick={postHandler}
      >
        Post
      </button>
    </div>
  );
};
export default TwitterPost;
