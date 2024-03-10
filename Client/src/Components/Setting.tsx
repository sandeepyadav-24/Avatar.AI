import { useNavigate } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";

const Setting = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="m-20 w-3/4  ">
        <div>
          <div className="bg-[#788F9C] h-20 w-20 rounded-full text-5xl text-white px-6 py-4 mx-auto my-3">
            S
          </div>

          <h1 className="text-center text-2xl">Welcome, Sandeep</h1>
          <h3 className="text-[#585B5A] text-center">
            Manage your info, privacy and security to make smartyPants work
            better for you.
          </h3>
        </div>

        <div
          className="border-[#E0E3E1]] border-2 py-2 px-5 my-8 rounded-xl"
          onClick={() => {
            navigate("/history");
          }}
        >
          <h1 className="text-xl">History Settings</h1>
          <h3 className="text-[#585B5A]">
            Choose whether to save the things that you do and places where you
            go to get more relevant results, personalised maps, recommendations
            and more
          </h3>
        </div>
        <div
          className="border-[#E0E3E1]] border-2 py-2 px-5 my-8 rounded-xl"
          onClick={() => {
            navigate("/tokens");
          }}
        >
          <h1 className="text-xl">Token Settings</h1>
          <h3 className="text-[#585B5A]">
            Configure your token settings below to personalize your experience
            on our platform.
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Setting;
