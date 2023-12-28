import { Link } from "react-router-dom";
import Logo from "/img/logoTitle.svg";

export const Footer = () => {
  return (
    <footer className="bg-white  px-3">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={Logo} alt="titleAndLogo" className="h-12" />
          </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2023 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
