import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface TweetProps {
  post: any[];
}
const TwitterPost: React.FC<TweetProps> = (props) => {
  const postHandler = async () => {
    // Check if the Clipboard API is supported
    const content = "Hello World";
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log("Content copied to clipboard:", content);
          // Optionally, you can show a success message or perform other actions
        })
        .catch((error) => {
          console.error("Unable to copy to clipboard:", error);
          // Handle the error, e.g., show an error message to the user
        });
    } else {
      // Clipboard API not supported, provide a fallback or notify the user
      console.error("Clipboard API not supported");
    }
  };
  return (
    <div
      className="mx-20 py-1 "
      onClick={() => {
        postHandler();
      }}
    >
      <h1 className="font-bold text-[#EFF4FF]  my-2 hover:text-white border-[#88B2FF] ">
        {"sandeepyadav24" || <Skeleton />}
      </h1>
      <h1 className="my-3 text-[#EFF4FF]  ">
        {props.post || <Skeleton count={5} />}
      </h1>
    </div>
  );
};
export default TwitterPost;
