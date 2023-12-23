import { Link } from "react-router-dom";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNavBar = ({ createPost,setIsSideOpen }) => {
  return (
    <div className="flex justify-between w-screen h-20 items-center px-5">
      <Link to="/" className="font-medium tracking-wide text-gray-700 hover:bg-white p-3 rounded-full">
        ←
      </Link>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faList} className="mr-8 h-7 hover:bg-white p-3 rounded-full cursor-pointer" onClick={()=>setIsSideOpen(true)}/>
        <button
          onClick={createPost}
          className="font-medium tracking-wide text-white bg-blue-500 px-5 py-2 rounded transition-colors hover:bg-blue-200"
        >
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreateNavBar;
