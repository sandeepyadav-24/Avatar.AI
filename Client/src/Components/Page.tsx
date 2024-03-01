import LeftNavbar from "./LeftNavbar";
const Page = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="w-3/4 h-screen bg-[#f5f5fc] p-20 flex flex-col justify-center">
        <h1 className="text-3xl text-center">Noter</h1>
        <h1 className="text-center">
          Effortlessly organise your daily life and stay on top of tasks
        </h1>
      </div>
    </div>
  );
};
export default Page;
