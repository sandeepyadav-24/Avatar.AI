import LeftNavbar1 from "./LeftNavbar1";
import OutputVideo from "./OutputVideo";
import VideoGenBanner from "./VideoGenBanner";

const VideoGen = () => {
  return (
    <div className="flex flex-row bg-black">
      <LeftNavbar1 />
      <div className="flex flex-row md:w-4/5 mx-3 my-3 bg-white h-[750px] ">
        <VideoGenBanner />
        <OutputVideo />
      </div>
    </div>
  );
};
export default VideoGen;
