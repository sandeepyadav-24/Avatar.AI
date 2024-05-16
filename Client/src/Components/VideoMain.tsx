import { useState } from "react";
//import Button from "./Button";
import Check from "./Check";
import BasicSelect from "./BasicSelect";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
const VideoMain = () => {
  // This is State for Video Script
  const [inputText, setInputText] = useState("");
  // Thsi is State for Video Type
  const [vidoeType, setVideoType] = useState("");
  // This is State for Voice Type
  const [voiceType, setVoiceType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const check = [
    { name: "Script Generation ", toggle: "done" },
    { name: "voice generation", toggle: "done" },
    { name: "voice adjust", toggle: "done" },
    { name: "video Generated", toggle: "done" },
    { name: "video Syncing", toggle: "done" },
  ];
  // Submit BTN Handler ( Activate when sumbit BTN is clicked )
  const btnHandler = async () => {
    setIsLoading(true);
    // Testing Purpose Checking
    alert(
      `Video Type: ${vidoeType} , Voice Type: ${voiceType} , Input Text: ${inputText}`
    );
    // fetching Operation
    const response = await fetch("http://localhost:3000/video/script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(prompt),
    });
  };
  return (
    <div className="md:w-4/5 h-[780px] bg-white m-3">
      <div className="text-2xl font-bold  py-2 px-5 flex flex-row justify-between">
        <div>Creating a free AI created video </div>
        <div
          className=" text-white bg-black  px-3 py-1 rounded-lg "
          onClick={btnHandler}
        >
          {isLoading ? "Loading..." : "Submit"}
        </div>
      </div>
      <div className="flex flex-row   bg-[#E4E4E4] h-[750px] ">
        {/** First Half of the Div  */}
        <div className="first w-3/5">
          <div className=" ">
            {/**  /////----   First Box of First Half of the Section   ----//////  */}
            <div className="first_question bg-white my-2 mx-2 p-2 rounded-md ">
              <h1 className="my-2"> What kind of video you want?</h1>
              <BasicSelect
                name={"Video Type"}
                option={[
                  "Product Pitch",
                  "How-To video",
                  "Sales Pitch",
                  "Learning & Development",
                  "Compliment",
                  "Custom",
                ]}
                value={vidoeType}
                onChange={setVideoType}
              />
            </div>

            {/** ///////------  Second Box of First Half of the Section   -----///// */}

            <div className="first_question bg-white my-2 mx-2 p-2 rounded-md ">
              <h1 className="my-2"> What kind of Voice modulation you want?</h1>
              <BasicSelect
                name={"Voice Type"}
                option={["Natasha", "Cristene", "MAxwell", "Sandeep", "Custom"]}
                value={voiceType}
                onChange={setVoiceType}
              />
            </div>

            {/**  ////---   Third Box of First Half oof the Section ------/////// */}

            <div className="second_question bg-white my-2 mx-2 p-2 rounded-md h-[470px]">
              <h1>Edit your video scripts</h1>

              <textarea
                name=""
                id=""
                value={inputText}
                className="h-[400px]  w-[630px] border-black border-[0.5px] rounded-md m-3 p-3 overflow-y-auto"
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        {/** Seconf Half of the Div */}
        <div className="second w-2/5">
          {/** First Box of the Second Half of the Section  */}
          <div className=" mx-3 my-2 p-3 rounded-md bg-white">
            {/**<LinearProgress /> */}
            <div>
              <h1>Generated Video</h1>
            </div>
            <div className=" h-60 bg-slate-200 rounded-lg my-5">
              <span className=" text-white font-bold ">
                {/**<CircularProgress className="mx-40 my-20" /> */}
              </span>
            </div>

            <div className="flex flex-row justify-between">
              <button className="bg-black text-white px-5 py-1 rounded-lg">
                Save
              </button>
              <button className="bg-black text-white px-5 py-1 rounded-lg">
                Preview
              </button>
            </div>
          </div>

          {/**  Second Box of the Second Half of the section  */}
          <div className="checks bg-white m-3 p-3 rounded-md">
            <div>checks</div>
            <hr />
            <div>
              {check.map((e, index) => {
                return <Check name={e.name} toggle={e.toggle} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMain;
