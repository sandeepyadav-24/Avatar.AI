import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TwitterPost from "../postPage.tsx/TwitterPost";
//import Tweet from "../Tweet";
import LeftNavbar1 from "../LeftNavbar1";
import AllNotes from "../AllNotes";
const TwitterPage = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  {
    useEffect(() => {
      const gpt = async () => {
        try {
          const journal = state?.journal;
          const response = await fetch("http://localhost:3000/gpt/tweet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ journal }),
          });

          if (response.ok) {
            const responseData = await response.json();

            //console.log(responseData);
            //const data = JSON.parse(responseData.message);
            //console.log("Alteast Reach Here");

            setTweets(responseData); // Assuming the response is an array of tweets
            //console.log(tweets);
          } else {
            console.error("Error fetching tweets:", response.statusText);
          }
        } catch (error) {
          // ERROR
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
      <div className=" bg-slate-300 h-screen overflow-y-auto w-3/5 rounded-xl my-2">
        <h1 className="text-center text-2xl font-semibold py-2 bg-[#041E49] text-white my-10">
          Find the Perfect Fit for Your Feed!
        </h1>
        {loading ? (
          <div className="px-[500px] py-[300px]">
            <l-dot-stream size="80" speed="2.5" color="black"></l-dot-stream>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap">
            {tweets.map((t, index) => {
              return (
                <div
                  className="w-[450px] my-10 bg-[#9dbff7] mx-5 rounded-xl hover:border-white border-2 "
                  key={index}
                >
                  <TwitterPost tweet={t} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default TwitterPage;
