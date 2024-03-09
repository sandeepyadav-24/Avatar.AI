import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LinkedinProps {
  //linkedin: string;
  post: string;
}

const FacebookPost: React.FC<LinkedinProps> = (props) => {
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
    });
    alert("Successfully Tweet Posted");
    navigate("/"); */
    }

    // Replace the content as needed
    const shareContent = props.post;

    // URL encode the content
    const encodedShareContent = encodeURIComponent(shareContent);

    // Create the Facebook Share URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedShareContent}`;

    // Open the Facebook Share URL in a new window
    window.open(facebookShareUrl, "_blank");
  };
  //const navigate = useNavigate();
  return (
    <div className="bg-white w-[400px] px-5 py-5" onClick={postHandler}>
      <div className="flex flex-row py-5">
        <div className="w-10 h-10 rounded-full bg-red-700" />
        <h1 className="px-3 py-2">{"UserName" || <Skeleton />}</h1>
      </div>
      <div>{props.post || <Skeleton />}</div>
    </div>
  );
};
export default FacebookPost;
