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
    // Replace the content as needd
    const shareContent = props.post;

    try {
      // Use the Clipboard API to copy the content to clipboard
      await navigator.clipboard.writeText(shareContent);
      //alert("Post copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy: ", error);
      alert("Failed to copy post to clipboard!");
    }

    // URL encode the content
    const encodedShareContent = encodeURIComponent(shareContent);

    // Create the LinkedIn Share URL
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareContent}`;

    // Open the LinkedIn Share URL in a new window
    window.open(linkedInShareUrl, "_blank");
  };
  //const navigate = useNavigate();
  return (
    <div className="bg-[#9DBFF6] w-[400px] px-5 py-5" onClick={postHandler}>
      <div className="flex flex-row py-5">
        <div className="w-10 h-10 rounded-full text-black p-2 px-4 font-semibold bg-[#F4F2ED]">
          S
        </div>

        <h1 className="px-3 py-2">{"sandeepyadav24" || <Skeleton />}</h1>
      </div>
      <div className="my-3 text-[#EFF4FF]  ">{props.post || <Skeleton />}</div>
    </div>
  );
};
export default LinkedinPost;
