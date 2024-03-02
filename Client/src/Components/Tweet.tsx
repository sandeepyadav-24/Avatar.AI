import React from "react";
import { useNavigate } from "react-router-dom";
interface TweetProps {
  tweet: string;
}
const Tweet: React.FC<TweetProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="mx-20 py-3">
      <h1 className="font-bold my-2 ">@username</h1>
      <h1 className="my-3">{props.tweet} </h1>
      <button
        className="bg-blue-700 text-white px-5 py-2 rounded-md"
        onClick={() => {
          alert("Successfully Tweet Posted");
          navigate("/");
        }}
      >
        Post{" "}
      </button>
    </div>
  );
};
export default Tweet;
