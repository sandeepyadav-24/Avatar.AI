import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FacebookPost from "../postPage.tsx/FacebookPost";
import LeftNavbar from "../LeftNavbar";
import { dotStream } from "ldrs";

dotStream.register();

const FacebookPage = () => {
  const [facebookPost, setFacebookPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  {
    useEffect(() => {
      const gpt = async () => {
        try {
          const journal = state?.journal;
          const response = await fetch("http://localhost:3000/gpt/facebook", {
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
            console.log(data);

            setFacebookPost(data); // Assuming the response is an array of tweets
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
    <div className="flex flex-row h-screen ">
      <LeftNavbar />
      <div className=" bg-[#F4F2EE] h-screen overflow-auto w-3/4">
        <h1 className="text-center text-2xl font-semibold py-5">
          Facebook Post
        </h1>

        {loading ? (
          <div className="px-[500px] py-[300px]">
            <l-dot-stream size="80" speed="2.5" color="black"></l-dot-stream>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap">
            {facebookPost.map((p, index) => {
              return (
                <div
                  className="w-[450px] my-10 bg-white mx-5 rounded-xl hover:border-blue-500 border-2 "
                  key={index}
                >
                  <FacebookPost post={p} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default FacebookPage;
