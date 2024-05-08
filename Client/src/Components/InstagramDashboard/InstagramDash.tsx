import InstagramFollowBanner from "./InstagramFollowBanner";
import InstagraStat from "./InstagraStat";
import InstagramProfile from "./InstagramProfile";

const InstagramDash = () => {
  return (
    <div className="flex flex-row h-[685px] bg-[#E4E4E4]">
      {/** First Half Of the DIV includes Followers section , Statistics and Data details Section   */}
      <div className="w-2/3 ">
        <div className="headline flex flex-row justify-between mx-4 px-3 mt-5 mb-3 rounded-md">
          <div className="text-2xl font-semibold">Overview</div>
          <div className="flex flex-row">
            <div className="mx-2">11 -18 feb</div>
            <div className="mx-2 bg-white px-3 py-1">7 days</div>
          </div>
        </div>
        <InstagramFollowBanner />
        <InstagraStat />
      </div>
      {/** Second Half of the div includes Profile section and pro Advetisement */}
      <div className="w-1/3">
        <InstagramProfile />
      </div>
    </div>
  );
};

export default InstagramDash;
