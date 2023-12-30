import { useState } from "react";
import Logo from "/img/logoTitle.svg";
import { Link } from "react-router-dom";

const Hamburger = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const humburgerMenuStyle = isOpen
    ? "opacity-100 translate-x-0"
    : "opacity-10 -translate-x-full";
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between sm:hidden">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} alt="logo" className="h-10" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${humburgerMenuStyle} w-full absolute top-20 left-0 duration-300`}
        >
          <ul className="flex flex-col font-medium rounded-lg bg-gray-50">
            <li>
              <Link to="/" className="block py-4 px-3 text-white bg-blue-700">
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/mypage"
                    className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    MyPage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/createpost/new"
                    className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Post
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
