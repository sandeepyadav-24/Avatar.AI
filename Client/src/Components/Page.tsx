import LeftNavbar from "./LeftNavbar";
const Page = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="w-3/4 h-screen bg-white p-20 flex flex-col justify-center">
        <span className="text-5xl inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
          Hello, Sandeep
        </span>
        <h1 className="text-[#C4C7C5] font-semibold text-5xl">
          How can I help you today?
        </h1>

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

{
  /** */
}
