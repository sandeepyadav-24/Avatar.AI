import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HashnodePost from "../postPage.tsx/HashnodePost";
//import Tweet from "../Tweet";
import LeftNavbar from "../LeftNavbar";
const HashnodePage = () => {
  const [hashnodePost, setHashnodePost] = useState<any[]>([]);
  const { state } = useLocation();
  {
    useEffect(() => {
      const gpt = async () => {
        const journal = state?.journal;
        const response = await fetch("http://localhost:3000/gpt/hashnode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ journal }),
        });
        if (response.ok) {
          const responseData = await response.json();
          const data = JSON.parse(responseData.message);

          setHashnodePost(data); // Assuming the response is an array of tweets
        } else {
          console.error("Error fetching tweets:", response.statusText);
        }
      };
      gpt();
    }, [state]);
  }

  return (
    <div className="flex flex-row h-screen ">
      <LeftNavbar />
      <div className="px-40 bg-white h-screen">
        <h1 className="text-center text-2xl font-semibold py-20">
          Post which suited you best Hashnode
        </h1>

        <div className="flex flex-row flex-wrap">
          <div className="w-[450px] my-10 bg-white mx-5 rounded-xl hover:border-blue-500 border-2 ">
            <HashnodePost post={hashnodePost} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HashnodePage;
