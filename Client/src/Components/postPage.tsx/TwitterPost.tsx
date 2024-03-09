import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface TweetProps {
  tweet: string;
}
const TwitterPost: React.FC<TweetProps> = (props) => {
  const postHandler = async () => {
    {
      /*const response = await fetch("http://localhost:3000/post/twitter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post }),
    }); */
    }
    // Replace the tweet content as needed
    const tweetContent = props.tweet;

    // URL encode the tweet content
    const encodedTweetContent = encodeURIComponent(tweetContent);

    // Create the Tweet Intent link
    const tweetIntentLink = `https://twitter.com/intent/tweet?text=${encodedTweetContent}`;

    // Open the Twitter intent link in a new window
    window.open(tweetIntentLink, "_blank");

    //alert("Successfully Tweet Posted");
    //navigate("/");
  };
  //const navigate = useNavigate();
  return (
    <div className="mx-20 py-1 " onClick={postHandler}>
      <h1 className="font-bold text-[#EFF4FF]  my-2 hover:text-white border-[#88B2FF] ">
        {"sandeepyadav24" || <Skeleton />}
      </h1>
      <h1 className="my-3 text-[#EFF4FF]  ">
        {props.tweet || <Skeleton count={5} />}{" "}
      </h1>
    </div>
  );
};
export default TwitterPost;
