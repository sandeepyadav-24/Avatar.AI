import InstagramDataList from "./InstagramDataList";

const InstagraStat = () => {
  const dataDetails = [
    {
      no: 1,
      date: "21, January",
      account_reached: "234",
      like: "54",
      post_activity: "543",
    },
    {
      no: 2,
      date: "18, January",
      account_reached: "24",
      like: "23",
      post_activity: "765",
    },
    {
      no: 3,
      date: "16, January",
      account_reached: "345",
      like: "54",
      post_activity: "654",
    },
    {
      no: 4,
      date: "15, January",
      account_reached: "123",
      like: "52",
      post_activity: "765",
    },
    {
      no: 5,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
    {
      no: 6,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
    {
      no: 7,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
    {
      no: 8,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
    {
      no: 9,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
    {
      no: 10,
      date: "14, January",
      account_reached: "456",
      like: "12",
      post_activity: "231",
    },
  ];
  return (
    <div className="border-black border-[1px] mx-4 px-3 py-2 rounded-md">
      Statistics
      <div className="h-[300px] bg-slate-200"></div>
      <div>
        <div className="my-3 text-2xl font-semibold">Data Details</div>
        <div className="h-[150px] overflow-y-auto">
          {dataDetails.map((e) => {
            return (
              <InstagramDataList
                no={e.no}
                date={e.date}
                account={e.account_reached}
                like={e.like}
                activity={e.post_activity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstagraStat;
