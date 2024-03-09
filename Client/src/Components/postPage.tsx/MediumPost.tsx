import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LinkedinProps {
  post: string;
}

const MediumPost: React.FC<LinkedinProps> = (props) => {
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
    {
      /** Replace the content as needed
    const postContent = props.post;

    // URL encode the content
    const encodedPostContent = encodeURIComponent(postContent);

    // Create the Medium new story URL
    const mediumNewStoryUrl = `https://medium.com/new/story?text=${encodedPostContent}`;

    // Open the Medium new story URL in a new window
    window.open(mediumNewStoryUrl, "_blank"); */
    }
  };
  //const navigate = useNavigate();
  console.log(props.post);
  return (
    <div className="bg-white w-[800px] px-5 py-5" onClick={postHandler}>
      <div className="flex flex-row py-5">
        <div className="w-10 h-10 rounded-full text-black p-2 px-4 font-semibold bg-[#F4F2ED]">
          S
        </div>
        <h1 className="px-3 py-2">{"sandeepyadav24" || <Skeleton />}</h1>
      </div>
      <div>{props.post}</div>
    </div>
  );
};
export default MediumPost;
