"use client";
import React from "react";
//import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

interface LinkedinProps {
  //linkedin: string;
  post: string;
}

const LinkedinPost: React.FC<LinkedinProps> = (props) => {
  const [editedPost, setEditedPost] = useState(props.post || "");
  //const post = "Hello World";

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedPost(event.target.value);
  };
  useEffect(() => {
    // Update textarea height based on content
    const textarea = document.getElementById("linkedin-post-textarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [editedPost]);

  return (
    <div className="mx-10 py-1 flex flex-col">
      <h1 className="font-bold text-[#799EFF] text-3xl  my-2 hover:text-white border-[#88B2FF] ">
        {"sandeepyadav24" || <Skeleton />}
      </h1>
      <textarea
        id="linkedin-post-textarea"
        className="my-6 text-[#EFF4FF] h-100 bg-transparent rounded-md p-2"
        placeholder="Write your LinkedIn post here..."
        style={{ height: "auto", outline: "none" }} // Set height to auto
        value={editedPost}
        onChange={handleInputChange}
      />
      <ToastContainer />
    </div>
  );
};
export default LinkedinPost;
