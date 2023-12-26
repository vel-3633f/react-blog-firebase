import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import CreatePost from "./router/CreatePost";
import Login from "./router/Login";
import Logout from "./router/Logout";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import Article from "./router/Article";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";

init({ data });

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
