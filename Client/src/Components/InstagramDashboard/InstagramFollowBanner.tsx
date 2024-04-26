import React from "react";

const InstagramFollowBanner = () => {
  return (
    <div className="flex flex-row bg-white p-3 border-black border-[1px] mx-4 my-2 rounded-md">
      <div className="w-1/3 px-10">
        <h1 className="text-[#A8ABB9] font-semibold">Followers</h1>
        <h1 className="text-[#363F5E] text-2xl">12,214</h1>
        <h1>Engagement</h1>
      </div>
      <div className="w-1/3 px-10">
        <h1 className="text-[#A8ABB9] font-semibold">Account Reached</h1>
        <h1 className="text-[#363F5E] text-2xl">26,628</h1>
        <h1>Engagement</h1>
      </div>
      <div className="w-1/3 px-10">
        <h1 className="text-[#A8ABB9] font-semibold">Post Activity</h1>
        <h1 className="text-[#363F5E] text-2xl">52,614</h1>
        <h1>Engagement</h1>
      </div>
    </div>
  );
};

export default InstagramFollowBanner;
