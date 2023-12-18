import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import CreatePost from "./router/CreatePost";
import Login from "./router/Login";
import Logout from "./router/Logout";
import { useState } from "react";

import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import Article from "./router/Article";

init({ data });
console.log(data);

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/article/:id" element={<Article />} />
        <Route
          path="/login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/logout"
          element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
