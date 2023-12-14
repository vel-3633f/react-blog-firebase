import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import CreatePost from "./router/CreatePost";
import Login from "./router/Login";
import Logout from "./router/Logout";
import NavBar from "./components/NavBar";
import { useState } from "react";

// function App() {
//   const [isAuth, setIsAuth] = useState(false);
//   console.log(isAuth);
//   return (
//     <Router>
//       <NavBar isAuth={isAuth} />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/createpost" element={<CreatePost />}></Route>
//         <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
//         <Route
//           path="/logout"
//           element={<Logout setIsAuth={setIsAuth} />}
//         ></Route>
//       </Routes>
//     </Router>
//   );
// }

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
  return (
    <Router>
      {/* NavBar を Routes の中に移動 */}
      <NavBar isAuth={isAuth} />

      <Routes>
        {/* 各ページごとに NavBar を表示 */}
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        {/* Login ページでは setIsAuth を渡す */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        {/* Logout ページでも setIsAuth を渡す */}
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
