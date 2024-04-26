interface dataDetails {
  no: number;
  date: string;
  account: string;
  like: string;
  activity: string;
}
const InstagramDataList = (props: dataDetails) => {
  return (
    <div className="flex flex-row mx-5 my-2">
      <div className="no w-1/12 px-2 text-center">{props.no}</div>
      <div className="date w-3/12 text-center">{props.date}</div>
      <div className="like w-3/12 text-center">{props.account}</div>
      <div className="acc w-3/12 text-center">{props.like}</div>
      <div className="activity w-2/12 text-center">{props.activity}</div>
    </div>
  );
};

export default InstagramDataList;
