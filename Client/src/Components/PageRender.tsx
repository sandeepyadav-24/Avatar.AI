import Page from "./Page";
import Homepage from "./Homepage";
import LeftNavbar1 from "./LeftNavbar1";
import Dashboard from "./Dashboard";
const PageRender = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <div className="flex flex-row h-screen bg-[#0E1011]">
        <LeftNavbar1 />
        <Dashboard />
      </div>
    );
  } else {
    return <Homepage />;
  }
};
export default PageRender;
