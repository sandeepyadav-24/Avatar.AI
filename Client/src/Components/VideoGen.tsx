import LeftNavbar1 from "./LeftNavbar1";
import OutputVideo from "./OutputVideo";
import VideoGenBanner from "./VideoGenBanner";

const VideoGen = () => {
  return (
    <div className="flex flex-row bg-black">
      <LeftNavbar1 />
      <VideoGenBanner />
      <OutputVideo />
    </div>
  );
};
export default VideoGen;
