import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkedinPost from "../postPage.tsx/LinkedinPost";
import LeftNavbar1 from "../LeftNavbar1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllNotes from "../AllNotes";
import { FaLinkedin } from "react-icons/fa";

const LinkedinPage = () => {
  // LinkedIn post State Managment
  const [linkedinPost, setLinkedinPost] = useState([]);
  // Loading State Managament
  const [loading, setLoading] = useState(true);

  // Getting Whole text for Conversion
  const { state } = useLocation();

  // Backend Request for requesting response in return of prompt
  const BackenfReq = async () => {
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

  const postHandler = async () => {
    // Getting the
    const shareContent = linkedinPost;

    const response = await fetch("http://localhost:3000/post/linkedinpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ content: shareContent }),
    });
    if (response.ok) {
      toast("LinkedIn Post Posted!");
    }
  };

  const reGenerateHandler = () => {
    BackenfReq();
  };

  {
    useEffect(() => {
      BackenfReq();
    }, [state]);
  }
  return (
    <div className="flex flex-row  bg-[#0E1011]">
      <LeftNavbar1 />
      <div className="md:w-4/5 h-[750px] flex flex-row  mx-3 my-3 ">
        <AllNotes />
        <div className=" w-3/4 h-[690px]">
          <div className="bg-[#FFFFFF] flex flex-row justify-between py-4 px-3 text-xl font-medium border-b-black border-[1px]">
            <div className="flex flex-row">
              <FaLinkedin className="text-blue-700 text-3xl mx-3" /> LinkedIn
            </div>
            <div>
              <button
                onClick={reGenerateHandler}
                className="bg-[#1B9CEC]  text-white   border-[#0080D0] border-2 px-5 mx-5 rounded-md"
              >
                re-Generate{" "}
              </button>
              <button
                onClick={postHandler}
                className="bg-[#1B9CEC]  text-white   border-[#0080D0] border-2 px-5 mx-5 rounded-md"
              >
                Post
              </button>
            </div>
          </div>

          <div className=" bg-[#F4F7F7] h-[685px] overflow-y-auto   ">
            {loading ? (
              <div className="px-[400px] py-[300px]">
                <l-dot-stream
                  size="80"
                  speed="2.5"
                  color="black"
                ></l-dot-stream>
              </div>
            ) : (
              <div className="flex flex-row flex-wrap">
                {linkedinPost.map((p, index) => {
                  return (
                    <div
                      className="w-[700px] my-10 mx-20 bg-[#3670FF]  rounded-xl hover:border-white border-2  "
                      key={index}
                    >
                      <LinkedinPost post={p} />
                    </div>
                  );
                })}
              </div>
            )}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkedinPage;
