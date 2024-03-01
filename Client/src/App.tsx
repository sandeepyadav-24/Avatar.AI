import { RecoilRoot } from "recoil";
import "./App.css";
import PageRender from "./Components/PageRender";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<PageRender />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
