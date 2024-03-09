import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LinkedinProps {
  //linkedin: string;
  post: string;
}

const LinkedinPost: React.FC<LinkedinProps> = (props) => {
  //const post = "Hello World";
  const postHandler = async () => {
    {
      /**const response = await fetch("http://localhost:3000/tweet/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post }),
    }); */
    }
    {
      /** Replace the tweet content as needed
    const postContent = props.post;

    // URL encode the tweet content
    const encodedContent = encodeURIComponent(postContent);

    // Create the Tweet Intent link
    const tweetIntentLink = `https://twitter.com/intent/tweet?text=${encodedTweetContent}`;

    // Open the Twitter intent link in a new window
    window.open(tweetIntentLink, "_blank");
 */
    }

    // Replace the content as needed
    const shareContent = props.post;

    // URL encode the content
    const encodedShareContent = encodeURIComponent(shareContent);

    // Create the LinkedIn Share URL
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareContent}`;

    // Open the LinkedIn Share URL in a new window
    window.open(linkedInShareUrl, "_blank");
  };
  //const navigate = useNavigate();
  return (
    <div className="bg-white w-[400px] px-5 py-5" onClick={postHandler}>
      <div className="flex flex-row py-5">
        <div className="w-10 h-10 rounded-full text-black p-2 px-4 font-semibold bg-[#F4F2ED]">
          S
        </div>

        <h1 className="px-3 py-2">{"sandeepyadav24" || <Skeleton />}</h1>
      </div>
      <div>{props.post || <Skeleton />}</div>
    </div>
  );
};
export default LinkedinPost;
