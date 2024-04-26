interface dataDetails {
  no: number;
  date: string;
  account: string;
  like: string;
  activity: string;
}
const InstagramDataList = (props: dataDetails) => {
  return (
    <div className="flex flex-row mx-5">
      <div className="no w-1/12 px-2">{props.no}</div>
      <div className="date w-3/12">{props.date}</div>
      <div className="like w-3/12">{props.account}</div>
      <div className="acc w-3/12">{props.like}</div>
      <div className="activity w-2/12">{props.activity}</div>
    </div>
  );
};

export default InstagramDataList;
