import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Note from "./Components/Note";
import NewNote from "./Components/NewNote";
import PageRender from "./Components/PageRender";
import TodoList from "./Components/TodoList";
import TwitterPage from "./Components/TwitterPage";

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
            <Route path="/todos" element={<TodoList />} />
            <Route path="/note/:noteId" element={<Note />} />
            <Route path="newNote" element={<NewNote />} />
            <Route path="/twitteroption" element={<TwitterPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
