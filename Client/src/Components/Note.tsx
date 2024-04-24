import LeftNavbar1 from "./LeftNavbar1";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import AllNotes from "./AllNotes";

//import Button from "./Button";
const Note = () => {
  const { noteId } = useParams();
  const [allNotes, setAllNotes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const notes = async () => {
      const response = await fetch("http://localhost:3000/todo/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Pre Response");
      if (!response.ok) {
        console.error("Failed to fetch notes");
        return;
      }
      console.log("Post ");
      const data = await response.json();
      setAllNotes(data);
    };
    notes();
  }, []);

  const buttonRefs = {
    twitter: useRef(null),
    linkedin: useRef(null),
    facebook: useRef(null),
    // Add more social media buttons here
  };

  const handleButtonClick = (socialMedia) => {
    alert(`Converting current Journal to ${socialMedia}`);
    navigate(`/${socialMedia}option`, {
      state: { journal: particularNote.description },
    });
  };

  const simulateButtonClicks = () => {
    Object.values(buttonRefs).forEach((buttonRef) => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    });
  };

  console.log(allNotes);
  const particularNote = allNotes.find((note) => note._id == noteId);

  if (!particularNote) {
    // Handle the case where the note with the specified noteId is not found
    return (
      <div className="flex flex-row bg-[#f5f5fc]">
        <LeftNavbar1 />
        <div className="w-3/4 p-20 ">
          <h1>Note not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-row bg-[#0E1011]">
      <LeftNavbar1 />

      <div className="md:w-4/5 h-[750px] flex flex-row  mx-3 my-3 ">
        <AllNotes />

        <div className="w-3/4  ">
          <div className="bg-[#FFFFFF] py-3 px-3 text-xl font-medium border-b-black border-[1px]">
            {particularNote.title}
          </div>
          <div className="py-5 px-20 h-[700px] overflow-y-auto bg-white ">
            <div className="flex flex-row bg-[#ecedee] rounded-md py-4 px-3 my-2 flex-wrap ">
              <span className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-black ">
                Share with :{" "}
              </span>
              <span
                className=" mx-2 my-2 px-5 py-2 rounded-md text-white font-bold bg-blue-700"
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/twitteroption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Twitter
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-blue-700 "
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/linkedinoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                LinkedIn
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-blue-700 "
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/facebookoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Facebook
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-red-700 "
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/youtubeoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Youtube
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-[#3C455A] "
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/mediumoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Medium
              </span>

              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-red-700"
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/quoraoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Quora
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-red-700"
                onClick={() => {
                  //alert("Converting current Journal to Tweet");
                  navigate("/redditoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Reddit
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-red-700"
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/emailoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Email
              </span>
              <span
                className="px-5 mx-2 py-2 my-2  rounded-md text-white font-bold bg-blue-700"
                onClick={() => {
                  alert("Converting current Journal to Tweet");
                  navigate("/hashnodeoption", {
                    state: { journal: particularNote.description },
                  });
                }}
              >
                Hashnode
              </span>
              <span
                className="px-5 mx-2 py-2 my-2 rounded-md text-white font-bold bg-green-500"
                onClick={simulateButtonClicks}
              >
                Push All
              </span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: particularNote.description }}
              className="bg-[#ecedee] px-5 py-5 rounded-md my-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
