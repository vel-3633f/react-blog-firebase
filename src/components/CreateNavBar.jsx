import { Link } from "react-router-dom";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const hoverButtonStyle =
  "hover:bg-white cursor-pointer transition duration-300 rounded-full";

const CreateNavBar = ({ createPost, updatePost, setIsSideOpen, isNew }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex justify-between w-screen h-20 items-center px-5 relative">
      <Link
        to="/"
        className={`font-medium tracking-wide text-gray-700 w-10 h-10 pt-2 pl-3 ${hoverButtonStyle}`}
      >
        ←
      </Link>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faFaceSmile}
          className={`mr-8 h-7 p-3 ${hoverButtonStyle}`}
          onClick={() => setIsSideOpen(true)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        {isNew ? (
          <button
            onClick={createPost}
            className="font-medium tracking-wide text-white bg-blue-500 px-5 py-2 rounded transition-colors hover:bg-blue-200"
          >
            投稿する
          </button>
        ) : (
          <button
            onClick={updatePost}
            className="font-medium tracking-wide text-white bg-blue-500 px-5 py-2 rounded transition-colors hover:bg-blue-200"
          >
            編集完了
          </button>
        )}

        <p
          className={`absolute top-[70px] text-xs bg-slate-500 p-1 text-white rounded duration-300 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          絵文字・トピック設定
        </p>
      </div>
    </div>
  );
};

export default CreateNavBar;
