import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import CreatePost from "./router/CreatePost";
import Login from "./router/Login";
import Logout from "./router/Logout";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
