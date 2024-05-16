import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediumPost from "../postPage.tsx/MediumPost";
import LeftNavbar1 from "../LeftNavbar1";
import AllNotes from "../AllNotes";
import { FaMediumM } from "react-icons/fa";

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
    <div className="flex flex-row  bg-[#0E1011]">
      <LeftNavbar1 />
      <div className="md:w-4/5 h-[750px] flex flex-row  mx-3 my-3 ">
        <AllNotes />

        <div className="w-3/4 h-[690px] ">
          <div className="bg-[#FFFFFF] flex flex-row py-4 px-3 text-xl font-medium border-b-black border-[1px]">
            <FaMediumM className="text-blue-700 text-3xl mx-3" /> Medium
          </div>
          <div className=" bg-[#F4F7F7] h-[685px] overflow-y-auto   ">
            {loading ? (
              <div className="px-[500px] py-[300px]">
                <l-dot-stream
                  size="80"
                  speed="2.5"
                  color="black"
                ></l-dot-stream>
              </div>
            ) : (
              <div className="flex flex-row flex-wrap">
                <div className="w-[700px] my-10 mx-20 bg-[#3670FF] rounded-xl hover:border-white border-2 ">
                  <MediumPost post={mediumPost} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediumPage;
