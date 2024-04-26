interface btn {
  name: string;
}
const Button = (props: btn) => {
  return (
    <div className="mx-2 px-3 py-1 my-2 text-white border-white border-[1px] rounded-md hover:text-black hover:bg-white">
      {props.name}
    </div>
  );
};

export default Button;
