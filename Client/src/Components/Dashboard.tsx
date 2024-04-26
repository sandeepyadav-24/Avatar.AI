import InstagramDash from "./InstagramDashboard/InstagramDash";

const Dashboard = () => {
  return (
    <div className="w-4/5 h-[790px] bg-[#F3F4F7]    my-3  mx-3">
      <div className="headline bg-white py-3">
        <div className="flex flex-row bg-[#F3F4F7] w-[360px] rounded-3xl mx-40 ">
          <div
            className="px-3 hover:bg-[#7014EC] hover:text-[#FFFFFF] py-2 rounded-3xl"
            onClick={() => {
              alert("Instagram pressed");
            }}
          >
            Instagram
          </div>
          <div
            className="px-3 hover:bg-[#7014EC] hover:text-[#FFFFFF] py-2 rounded-3xl"
            onClick={() => {
              alert("LinkedIn  pressed");
            }}
          >
            LinkedIn
          </div>
          <div
            className="px-3 hover:bg-[#7014EC] hover:text-[#FFFFFF] py-2 rounded-3xl"
            onClick={() => {
              alert("Hashnode pressed");
            }}
          >
            Hashnode
          </div>
          <div
            className="px-3 hover:bg-[#7014EC] hover:text-[#FFFFFF] py-2 rounded-3xl"
            onClick={() => {
              alert("Medium pressed");
            }}
          >
            Medium
          </div>
        </div>
      </div>

      {/** This is going to be big as hell */}

      <InstagramDash />
    </div>
  );
};

export default Dashboard;
