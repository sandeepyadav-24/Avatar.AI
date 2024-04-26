import Button from "./Button";
const VideoMain = () => {
  const btnData = [
    "Product Pitch",
    "How-To video",
    "Sales Pitch",
    "Learning & Development",
    "Compliment",
  ];
  return (
    <div className="flex flex-row md:w-4/5 mx-3 my-3  h-[780px] ">
      {/** First Hald of the Div  */}
      <div className="first w-3/5">
        <div className="bg-[#232323] m-3 rounded-md h-[500px]">
          <div>
            <h1 className="text-white">Creating a free AI created video</h1>
            <h1 className="text-[#6E6E70]">
              Edit your script. Political, sexual and discriminatory content
              will not be approved.
            </h1>
          </div>
          <div className="first_question">
            <h1 className="text-white">1. What kind of video you want?</h1>
            <h1>Select template to help AI understand your need</h1>
            <div className="flex flex-row flex-wrap ">
              {btnData.map((e, index) => {
                return <Button name={e} key={index} />;
              })}
            </div>
          </div>

          <div className="second_question">
            <h1>2. Edit your video scripts</h1>
            <h1>You can use popular language, any word, etc</h1>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
        </div>
      </div>
      {/** Seconf Half of the Div */}
      <div className="second w-2/5">
        <div className="h-[300px] mx-3 my-2 rounded-md bg-white">
          <span className="mx-20 my-20">generating video </span>
        </div>
      </div>
    </div>
  );
};

export default VideoMain;
