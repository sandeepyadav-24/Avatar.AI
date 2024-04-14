import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkedinPost from "../postPage.tsx/LinkedinPost";
import LeftNavbar1 from "../LeftNavbar1";
import AllNotes from "../AllNotes";

const LinkedinPage = () => {
  const [linkedinPost, setLinkedinPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  {
    useEffect(() => {
      const gpt = async () => {
        try {
          const journal = state?.journal;
          const response = await fetch("http://localhost:3000/gpt/linkedin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ journal }),
          });
          if (response.ok) {
            const responseData = await response.json();
            //const data = JSON.parse(responseData.message);
            //console.log(data);

            setLinkedinPost(responseData); // Assuming the response is an array of tweets
          } else {
            console.error("Error fetching LinkedIn Post:", response.statusText);
          }
        } catch (error) {
          //console.error("Error fetching LinkedIn Post:");
        } finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };
      gpt();
    }, [state]);
  }
  return (
    <div className="flex flex-row h-screen bg-black">
      <LeftNavbar1 />
      <AllNotes />
      <div className=" bg-slate-300 h-screen overflow-y-auto w-3/4 rounded-xl my-2">
        <h1 className="text-center text-2xl font-semibold py-2 bg-[#041E49] text-white my-10">
          LinkedIn Post
        </h1>
        <h1 className="my-5 px-10 bg-black text-white text-center py-1 font-semibold">
          Post copy in your clipboard
        </h1>

        {loading ? (
          <div className="px-[500px] py-[300px]">
            <l-dot-stream size="80" speed="2.5" color="black"></l-dot-stream>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap">
            {linkedinPost.map((p, index) => {
              return (
                <div
                  className="w-[450px] py-10 bg-white px-5 rounded-xl hover:border-blue-500 border-2 p-3 "
                  key={index}
                >
                  <LinkedinPost post={p} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default LinkedinPage;
