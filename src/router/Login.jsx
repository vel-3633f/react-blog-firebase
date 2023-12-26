import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "/img/logoTitle.svg";
import google from "/img/googleLogo.svg";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  const loginWithEmail = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <>
      <NavBar />
      <div className="w-screen h-[calc(100vh-5rem)] bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-10 rounded-xl flex flex-col items-center">
          <img src={logo} alt="logo" className="h-12 mb-5" />
          <p className="text-gray-600 text-sm mb-5">
            ここは情報共有プラットフォームです。
            <br />
            知見やアイデアをシェアしましょう。
          </p>
          <button
            onClick={loginInWithGoogle}
            className="border border-gray-200 px-5 py-2 rounded hover:text-gray-400 hover:bg-gray-100"
          >
            <img
              src={google}
              alt="google by Icons8"
              className="w-7 inline-block"
            />
            <span className="font-bold ml-3">Login With Google</span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                handleChangeEmail(event);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(event) => {
                handleChangePassword(event);
              }}
            />
            {/* <p className="text-red-500 text-xs italic">{error}</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginWithEmail}
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
