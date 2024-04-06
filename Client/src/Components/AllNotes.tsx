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
              className=" hover:bg-[#d3d9df] flex flex-row py-3 px-2  border-black border-[1px]"
              onClick={() => noteClick(todo._id)}
            >
              <div className="bg-[#434768] h-10 w-1/5 rounded-md"></div>
              <h3 className="px-3 w-4/5">{todo.title}</h3>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};
export default AllNotes;
