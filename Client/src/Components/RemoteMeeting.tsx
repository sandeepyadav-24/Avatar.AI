import LeftNavbar1 from "./LeftNavbar1";

const RemoteMeeting = () => {
  return (
    <div className="flex flex-row h-screen bg-black ">
      <LeftNavbar1 />
      <div className="flex flex-col w-4/5 my-2 px-4 rounded-xl bg-white ">
        <div className="font-bold text-center text-2xl my-3">
          Meeting Details
        </div>
        <div className="my-5">
          <div className="font-semibold">Host Name</div>
          <input type="text" className="border-black border-[1px] px-3 py-1 " />
        </div>
        <div className="my-5">
          <div className="font-semibold">Host Relation</div>
          <input type="text" className="border-black border-[1px] px-3 py-1 " />
        </div>
        <div className="my-5">
          <div className="font-semibold">Meeting Purpose</div>
          <textarea
            name=""
            id=""
            className="border-black border-[1px]"
          ></textarea>
        </div>
        <div className="my-5">
          <div className="font-semibold">Meeting Link</div>
          <input type="text" className="border-black border-[1px] px-3 py-1 " />
        </div>
        <button className="bg-blue-600 text-white w-40 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RemoteMeeting;
