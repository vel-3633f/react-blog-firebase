import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CreatePost from "./views/CreatePost";
import Login from "./views/Login";
import Logout from "./views/Logout";
import SignUp from "./views/SignUp";
import data from "@emoji-mart/data";
import SearchTopic from "./views/SearchTopic";
import { init } from "emoji-mart";
import Article from "./views/Article";
import { AuthProvider } from "./context/AuthContext";
import MyPage from "./views/MyPage";
import TopicPage from "./views/TopicPage";

init({ data });

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/createpost/:id" element={<CreatePost />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/search" element={<SearchTopic />} />
          <Route path="search/:topicName" element={<TopicPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
