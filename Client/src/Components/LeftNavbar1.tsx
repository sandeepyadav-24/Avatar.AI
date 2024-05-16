{
  /* React Icons Import */
}
import { MdOutlineHistory } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutlineSpeakerNotes } from "react-icons/md";
{
  /** React Router DOM */
}
import { useNavigate } from "react-router-dom";

const LeftNavbar1 = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className=" md:w-1/5  bg-[#0E1011] h-screen    ">
      <div className="heading font-bold text-white text-2xl p-3">Avatar.AI</div>

      <div className="px-5">
        <div className="Feature_1 my-2 ">
          <div className="text-[#858687] font-semibold">AI GEN</div>
          <div className="List text-white ">
            {/** Dashboard Left Navbar */}
            <div
              className="hover:bg-[#2C3135] rounded-md  px-3 py-1 flex flex-row "
              onClick={() => {
                navigate("/");
              }}
            >
              <RiDashboard3Line className="text-2xl" />{" "}
              <span className="mx-3">DashBoard</span>
            </div>
            {/** NotePad Left Navbar  */}
            <div
              className="hover:bg-[#2C3135] rounded-md  px-3 py-1  flex flex-row"
              onClick={() => {
                navigate("/newNote");
              }}
            >
              <FaPenToSquare className="text-2xl" />

              <span className="mx-3">New Notes</span>
            </div>
            {/** All NOtes Left Navbar */}
            <div
              className="hover:bg-[#2C3135] rounded-md  px-3 py-1  flex flex-row"
              onClick={() => {
                navigate("/notes");
              }}
            >
              <MdOutlineSpeakerNotes className="text-2xl" />
              <span className="mx-3">All Notes</span>
            </div>

            {/**
               * <div className="hover:bg-[#2C3135] rounded-md  px-3 py-1  flex flex-row">
              <div className="mr-3">
                <svg
                  className="w-6 h-6 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div><div
                onClick={() => {
                  navigate("/prompt");
                }}
              >
                Prompt Box
              </div> </div> */}
          </div>
        </div>
        <hr />
        <div className="Feature_2 my-2  ">
          <div className="text-[#858687] font-semibold">PROJECT</div>
          <div className="List text-white">
            <div className="hover:bg-[#2C3135] rounded-md  px-3 py-1 flex flex-row">
              <div
                onClick={() => {
                  navigate("/videogen");
                }}
                className="flex flex-row"
              >
                <MdVideoSettings className="text-2xl" />{" "}
                <span className="mx-3">Video Gen</span>
              </div>
            </div>
            <div className="hover:bg-[#2C3135] rounded-md  px-3 py-1 flex flex-row">
              <div
                onClick={() => {
                  navigate("/imagegen");
                }}
                className="flex flex-row"
              >
                <MdOutlineVideoLibrary className="text-2xl" />{" "}
                <span className="mx-3">Video Galary</span>
              </div>
            </div>
          </div>
        </div>
        <hr />a
        <div className="Feature_3 my-2 ">
          <div className="text-[#858687] font-semibold">PLANNING</div>
          <div className="List text-white">
            <div className="hover:bg-[#2C3135] rounded-md  px-3 py-1">
              Deployments
            </div>
            <div className="hover:bg-[#2C3135] rounded-md  px-3 py-1">
              GENERATIVE AI
            </div>
          </div>
        </div>
        <hr />
        <div className="Feature_3 my-4 ">
          <div className="text-[#858687] font-semibold">MEETINGS</div>
          <div className="List text-white">
            <div
              className="hover:bg-[#2C3135] rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/casualmeeting");
              }}
            >
              Casual Meetings
            </div>
            <div
              className="hover:bg-[#2C3135] rounded-md flex flex-row px-3 py-1"
              onClick={() => {
                navigate("/remotemeeting");
              }}
            >
              <IoVideocam className="text-2xl" />{" "}
              <span className="mx-2">Remote Meetings</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="setting my-2  ">
          <div className="text-[#858687] font-semibold">SETTING</div>
          <div className="List text-white ">
            <div
              className="hover:bg-[#2C3135] rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/tokens");
              }}
            >
              API
            </div>
            <div
              className="hover:bg-[#2C3135] flex flex-row rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/setting");
              }}
            >
              <IoMdSettings className="text-2xl" />{" "}
              <span className="mx-2">Data controls</span>
            </div>
            <div
              className="hover:bg-[#2C3135] flex flex-row rounded-md  px-3 py-1"
              onClick={() => {
                navigate("/history");
              }}
            >
              <MdOutlineHistory className="text-2xl" />
              <span className="mx-2"> History</span>
            </div>
          </div>
        </div>
        <hr className="font-bold text-xl" />
        <div className="my-2">
          <div className="font-semibold text-[#858687]" onClick={logout}>
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar1;
