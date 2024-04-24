import AllNotes from "./AllNotes";

const NotesFirstRender = () => {
  return (
    <div className="flex flex-row my-3 mx-3 md:w-4/5">
      <AllNotes />
      <div className="Second Part md:w-3/4 bg-white  ">
        <h1 className="text-center text-3xl font-bold mx-40 my-60 ">
          You will get all your Journals
        </h1>
      </div>
    </div>
  );
};

export default NotesFirstRender;
