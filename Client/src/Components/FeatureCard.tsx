interface feature {
  title: String;
  value: String;
}
const Featurecard = (props: feature) => {
  return (
    <div className="bg-[#18181B]  w-[320px] mx-5 my-10 px-5 py-7 rounded-xl ">
      <p className="my-2 text-white text-xl font-semibold">{props.title}</p>
      <p className="text-[#C8C8C8]">{props.value}</p>
    </div>
  );
};
export default Featurecard;
