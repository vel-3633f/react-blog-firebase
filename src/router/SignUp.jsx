import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import logo from "/img/logoTitle.svg";
import { useAuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import google from "/img/googleLogo.svg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  const Register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
        if (
          error.message ==
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setError("パスワードは6文字以上にしてください");
        }
      });
    await updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      navigate("/");
    });
  };
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
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
        <div className="bg-white py-10 px-32 rounded-xl flex flex-col items-center">
          <img src={logo} alt="logo" className="h-12 mb-5" />

          <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-100">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  ユーザー名
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="ユーザー名"
                  value={name}
                  onChange={(event) => {
                    handleChangeName(event);
                  }}
                />
              </div>
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
                <p className="text-red-500 text-xs italic">{error}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={Register}
                >
                  新規登録
                </button>
              </div>
            </form>
            <button
              onClick={loginInWithGoogle}
              className="border w-full max-w-md border-gray-200 px-5 py-2 rounded hover:text-gray-400 hover:bg-gray-100 mb-5"
            >
              <img
                src={google}
                alt="google by Icons8"
                className="w-7 inline-block"
              />
              <span className="font-bold ml-3">Register With Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
