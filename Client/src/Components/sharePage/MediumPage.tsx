import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediumPost from "../postPage.tsx/MediumPost";
import LeftNavbar from "../LeftNavbar";
import { dotStream } from "ldrs";

dotStream.register();

const MediumPage = () => {
  const [mediumPost, setMediumPost] = useState("");
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  {
    useEffect(() => {
      const gpt = async () => {
        try {
          const journal = state?.journal;
          const response = await fetch("http://localhost:3000/gpt/medium", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ journal }),
          });
          if (response.ok) {
            const responseData = await response.json();
            const data = await JSON.parse(responseData.message);
            const dataString = data.join("\n");
            console.log("Data received:", dataString); // Log the data

            setMediumPost(dataString); // Assuming the response is an array of tweets
          } else {
            console.error("Error fetching LinkedIn Post:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching LinkedIn Post:", error);
        } finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };
      gpt();
    }, [state]);
  }
  return (
    <div className="flex flex-row h-screen ">
      <LeftNavbar />
      <div className=" bg-[#F4F2EE] h-screen overflow-auto w-3/4">
        <h1 className="text-center text-2xl font-semibold py-5">Medium Post</h1>

        {loading ? (
          <div className="px-[500px] py-[300px]">
            <l-dot-stream size="80" speed="2.5" color="black"></l-dot-stream>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap">
            <div className="w-[900px] p-3 my-10 bg-white mx-5 rounded-xl hover:border-blue-500 border-2 ">
              <MediumPost post={mediumPost} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MediumPage;
