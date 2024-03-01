import Page from "./Page";
import Homepage from "./Homepage";
const PageRender = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Page />;
  } else {
    return <Homepage />;
  }
};
export default PageRender;
