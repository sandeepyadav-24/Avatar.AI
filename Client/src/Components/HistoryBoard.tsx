const HistoryBoard = () => {
  const data = [
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
    { media: "Twitter", time: "09:46:05", date: "2024-04-14" },
  ];
  return (
    <div className="container  mx-auto p-4 w-4/5  h-[750px] my-5 bg-[#E4E4E4]">
      <h2 className="text-3xl font-bold mb-4">History</h2>
      <div>
        <div className="w-2/3">
          <div className="bg-[#E4E4E4] ">
            <div className=" flex flex-row bg-white my-2 rounded-md py-1">
              <div className="w-1/2 text-center">Content</div>
              <div className="w-1/2 text-center">Time</div>
              <div className="w-1/2 text-center">Date</div>
            </div>
          </div>
          <div className="overflow-y-auto h-[600px] bg-white rounded-md py-1 ">
            {data.map((e) => {
              return (
                <div className="flex flex-row my-2">
                  <div className="w-1/3 text-center">{e.media}</div>
                  <div className="w-1/3 text-center">{e.time}</div>
                  <div className="w-1/3 text-center">{e.date}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default HistoryBoard;
