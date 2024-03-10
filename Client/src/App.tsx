import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Note from "./Components/Note";
import NewNote from "./Components/NewNote";
import PageRender from "./Components/PageRender";
import TodoList from "./Components/TodoList";
import TwitterPage from "./Components/sharePage/TwitterPage";
import Setting from "./Components/Setting";
import LinkedinPage from "./Components/sharePage/LinkedinPage";
import FacebookPage from "./Components/sharePage/FacebookPage";
import YoutubePage from "./Components/sharePage/YoutubePage";
import MediumPage from "./Components/sharePage/MediumPage";
import HashnodePage from "./Components/sharePage/HashnodePage";
import DevPage from "./Components/sharePage/DevPage";
import QuoraPage from "./Components/sharePage/QuoraPage";
import RedditPage from "./Components/sharePage/RedditPage";
import EmailPage from "./Components/sharePage/EmailPage";
import HistoryPage from "./Components/HistoryPage";
import TokenPage from "./Components/TokenPage";

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
            <Route path="/linkedinoption" element={<LinkedinPage />} />
            <Route path="/facebookoption" element={<FacebookPage />} />
            <Route path="/youtubeoption" element={<YoutubePage />} />
            <Route path="/mediumoption" element={<MediumPage />} />
            <Route path="/hashnodeoption" element={<HashnodePage />} />
            <Route path="/devoption" element={<DevPage />} />
            <Route path="/Quoraoption" element={<QuoraPage />} />
            <Route path="/redditoption" element={<RedditPage />} />
            <Route path="/emailoption" element={<EmailPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/tokens" element={<TokenPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
