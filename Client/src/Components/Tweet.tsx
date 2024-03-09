import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface TweetProps {
  tweet: string;
}
const Tweet: React.FC<TweetProps> = (props) => {
  const post = "hello World";
  const postHandler = async () => {
    const response = await fetch("http://localhost:3000/post/twitter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post }),
    });
    alert("Successfully Tweet Posted");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="mx-20 py-1">
      <h1 className="font-bold my-2 ">{"@username" || <Skeleton />}</h1>
      <h1 className="my-3">{props.tweet || <Skeleton count={5} />} </h1>
      <button
        className="bg-blue-700 text-white px-5 py-2 rounded-md"
        onClick={postHandler}
      >
        Post
      </button>
    </div>
  );
};
export default Tweet;
