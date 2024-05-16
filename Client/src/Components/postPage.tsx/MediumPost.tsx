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
    <div className="mx-10 py-1">
      <h1 className="font-bold text-[#799EFF] text-3xl  my-2 hover:text-white border-[#88B2FF] ">
        {"sandeepyadav24" || <Skeleton />}
      </h1>
      <h1 className="my-6 text-[#EFF4FF]   ">
        {props.post || <Skeleton count={5} />}
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
export default MediumPost;
