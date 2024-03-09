import LeftNavbar from "./LeftNavbar";
const Page = () => {
  return (
    <div className="flex flex-row">
      <LeftNavbar />
      <div className="w-3/4 h-screen bg-white p-20 flex flex-col justify-center">
        <span className="text-5xl font-bold inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
          Hello, Sandeep
        </span>
        <h1 className="text-[#C4C7C5] font-bold text-5xl">
          How can I help you today?
        </h1>
        <div className="feature-box flex flex-row py-16">
          <div className="bg-[#F0F4F8] mx-3 w-[200px] p-4 rounded-xl h-[200px] hover:bg-slate-200">
            Embark on a Journey of Knowledge and Insight
          </div>
          <div className="bg-[#F0F4F8] mx-3 w-[200px] p-4 rounded-xl h-[200px] hover:bg-slate-200">
            Your Daily Portal to Informed Perspectives and Thoughtful
            Reflections.
          </div>
          <div className="bg-[#F0F4F8] mx-3 w-[200px] p-4 rounded-xl h-[200px] hover:bg-slate-200">
            Your Daily Portal to Informed Perspectives and Thoughtful
            Reflections.
          </div>
          <div className="bg-[#F0F4F8] mx-3 w-[200px] p-4 rounded-xl h-[200px] hover:bg-slate-200">
            Your Daily Portal to Informed Perspectives and Thoughtful
            Reflections.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;

{
  /** */
}
