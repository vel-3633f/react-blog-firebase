import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "/img/logoTitle.svg";
import NavBar from "../components/NavBar";

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() => {
      navigate("/login");
    });
  };
  return (
    <>
      <NavBar />
      <div className="w-screen h-[calc(100vh-5rem)] bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-10 rounded-xl flex flex-col items-center">
          <img src={logo} alt="logo" className="h-12 mb-5" />
          <p className="text-gray-600 text-sm mb-5">
            ログアウトをしたい場合、以下のボタンをクリック。
          </p>
          <button
            onClick={logout}
            className="text-red-500 hover:text-white border border-red-200 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"
          >
            <span className="">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
