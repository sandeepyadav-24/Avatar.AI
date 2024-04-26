const InstagramProfile = () => {
  return (
    <div className=" border-[1px] my-5 mx-4 rounded-md px-2 py-2 bg-white">
      <div className="text-xl font-semibold">Account</div>
      <div className="h-40 w-28 bg-slate-400 mx-28 my-5">Profile picture</div>
      <div className="text-center">
        <div>Sandeep Yadav</div>
        <div>sandeepyadav.24</div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/3 px-5">
          <h1>12,345</h1>
          <h1>follower</h1>
        </div>
        <div className="w-1/3 px-5">
          <h1>607</h1>
          <h1>following </h1>
        </div>
        <div className="w-1/3 px-5">
          <h1>134</h1>
          <h1>Post</h1>
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;
