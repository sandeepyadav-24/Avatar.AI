import LeftNavbar from "./LeftNavbar";
const Page = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="w-3/4 h-screen bg-[#f5f5fc] p-20 flex flex-col justify-center">
        <h1 className="text-3xl text-center">Your Journal</h1>
        <h1 className="text-center">
          Embark on a Journey of Knowledge and Insight
        </h1>
        <h1 className="text-center mx-20">
          Your Daily Portal to Informed Perspectives and Thoughtful Reflections.
        </h1>
      </div>
    </div>
  );
};
export default Page;
