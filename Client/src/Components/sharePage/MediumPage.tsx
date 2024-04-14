import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediumPost from "../postPage.tsx/MediumPost";
import LeftNavbar1 from "../LeftNavbar1";
import AllNotes from "../AllNotes";

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
            //const data = await JSON.parse(responseData.message);
            //const dataString = data.join("\n");
            //console.log("Data received:", dataString); // Log the data

            setMediumPost(responseData); // Assuming the response is an array of tweets
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
    <div className="flex flex-row h-screen bg-black ">
      <LeftNavbar1 />
      <AllNotes />
      <div className=" bg-slate-300 h-screen overflow-y-auto w-3/4 rounded-xl my-2">
        <h1 className="text-center text-2xl font-semibold bg-[#041E49] py-2 text-white my-10">
          Medium Post
        </h1>

        {loading ? (
          <div className="px-[500px] py-[300px]">
            <l-dot-stream size="80" speed="2.5" color="black"></l-dot-stream>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap">
            <div className="w-[450px] p-3 my-10 bg-white mx-5 rounded-xl hover:border-blue-500 border-2 ">
              <MediumPost post={mediumPost} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MediumPage;
