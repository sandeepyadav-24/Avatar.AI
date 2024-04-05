//import NotesList from "./NotesList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
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
      const data = await response.json();
      console.log(data);
      setAllNotes(data);
    };
    notes();
  }, []);
  const noteClick = (noteId: string) => {
    navigate(`/note/${noteId}`);
  };
  return (
    <div className="md:w-1/5 bg-[#F5F9FC] m-3  rounded-xl h-[800px] ">
      <div className="text-2xl font-bold p-3 px-5 flex flex-row justify-between">
        <div>All Journal</div>
        <div>
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className="flex flex-col overflow-y-auto max-h-[750px]">
        <div className=" ">
          {allNotes.map((todo) => (
            <div
              key={todo._id}
              className="my-2 hover:bg-[#d3d9df] flex flex-row py-2 px-2 rounded-2xl"
              onClick={() => noteClick(todo._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <h3 className="px-3">{todo.title}</h3>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};
export default AllNotes;
