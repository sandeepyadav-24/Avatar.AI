//import NotesList from "./NotesList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
interface Note {
  _id: string; // Assuming _id is of type string
  title: string; // Assuming title is of type string
  // Add more properties if needed
}

const AllNotes = () => {
  const [allNotes, setAllNotes] = useState<Note[]>([]);
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
    <div className="md:w-1/4 bg-[#F5F9FC] border-r-black border-[1px]   h-[790px] ">
      <div className="text-2xl bg-[#F3F6F8] border-b-black border-[1px]  font-bold p-3 px-5 flex flex-row justify-between">
        <div className="flex flex-row bg-[#FFFFFF] rounded-md">
          <FaSearch className="text-2xl w-1/6 pt-2" />
          <input
            type="text"
            placeholder="Search Journal"
            className="bg-[#FFFFFF] text-xl font-medium py-1 px-2 w-5/6 "
          />
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto max-h-[723px]">
        <div className=" ">
          {allNotes.map((todo) => (
            <div
              key={todo._id}
              className=" hover:bg-[#d3d9df] flex flex-row py-3 px-2  border-black border-b-[1px]"
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
