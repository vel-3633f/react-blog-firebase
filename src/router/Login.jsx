import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      console.log(result);
      navigate("/");
    });
  };
  return (
    <div className="w-screen min-h-screen bg-gray-200">
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;

// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuth }) => {
//   const navigate = useNavigate();
//   const loginInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result) => {
//       localStorage.setItem("isAuth", true);
//       setIsAuth(true);
//       navigate("/");
//     });
//   };
//   return (
//     <div className="loginPage">
//       <p>ログインして始める</p>
//       <button className="loginButton" onClick={loginInWithGoogle}>
//         Googleでログイン
//       </button>
//     </div>
//   );
// };

// export default Login;
