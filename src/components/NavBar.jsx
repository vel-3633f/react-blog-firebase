// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "/img/logoTitle.svg";
import { useAuthContext } from "../context/AuthContext";

const hoverStyle = "transition text-gray-700 hover:text-gray-400";

const NavBar = () => {
  const { user } = useAuthContext();
  return (
    <div className="h-20 bg-white px-5 py-5 max-w-screen">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img src={Logo} alt="titleAndLogo" className="h-12" />
        </Link>
        <ul className="flex items-center space-x-8 lg:flex">
          <li className={`${hoverStyle}`}>
            <Link to="/" className="font-medium tracking-wide trantion">
              <FontAwesomeIcon icon={faHouse} className="mr-1" />
              Home
            </Link>
          </li>
          {user ? (
            <>
              <li className={`${hoverStyle}`}>
                <Link
                  to="/createpost"
                  className="font-medium tracking-wide text-white bg-blue-500 px-5 py-2 rounded transition-colors duration-200 hover:bg-blue-300"
                >
                  <FontAwesomeIcon icon={faFilePen} className="mr-1" />
                  Post
                </Link>
              </li>
              <li className={`${hoverStyle}`}>
                <Link
                  to="/logout"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="mr-1"
                  />
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={`${hoverStyle}`}>
                <Link
                  to="/login"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="mr-1"
                  />
                  Login
                </Link>
              </li>
              <li className={`${hoverStyle}`}>
                <Link
                  to="/signUp"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="mr-1"
                  />
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
