import "./App.css";
import PageRender from "./Components/PageRender";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageRender />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
