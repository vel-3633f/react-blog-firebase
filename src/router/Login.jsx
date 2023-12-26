import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "/img/logoTitle.svg";
import google from "/img/googleLogo.svg";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import SignIn from "../components/SignIn";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <div className="w-screen h-[calc(100vh-5rem)] bg-gray-200 flex justify-center items-center">
        <div className="bg-white py-10 px-20 rounded-xl flex flex-col items-center">
          <img src={logo} alt="logo" className="h-12 mb-5" />
          <p className="text-gray-600 text-sm mb-5">
            ここは情報共有プラットフォームです。
            <br />
            知見やアイデアをシェアしましょう。
          </p>
          <button
            onClick={loginInWithGoogle}
            className="border w-full max-w-xs border-gray-200 px-5 py-2 rounded hover:text-gray-400 hover:bg-gray-100 mb-5"
          >
            <img
              src={google}
              alt="google by Icons8"
              className="w-7 inline-block"
            />
            <span className="font-bold ml-3">Login With Google</span>
          </button>
          <SignIn />
        </div>
      </div>
    </>
  );
};
export default Login;
