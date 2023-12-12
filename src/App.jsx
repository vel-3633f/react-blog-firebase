import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import CreatePost from "./router/CreatePost";
import Login from "./router/Login";
import Logout from "./router/Logout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
