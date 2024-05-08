interface btn {
  name: string;
}
const Button = (props: btn) => {
  return (
    <div className="mx-2 px-3 py-1 my-2  border-[1px] rounded-md ">
      {props.name}
    </div>
  );
};

export default Button;
