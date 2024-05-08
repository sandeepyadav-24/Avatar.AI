interface check {
  name: string;
  toggle: string;
}

const Check = (props: check) => {
  return (
    <div className="my-1 flex flex-row">
      <div className="w-1/2 text-center">{props.name}</div>
      <div className="w-1/2 text-center">{props.toggle}</div>
    </div>
  );
};

export default Check;
