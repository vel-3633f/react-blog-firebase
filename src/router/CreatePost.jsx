import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="flex justify-between w-screen h-20 items-center px-5">
        <Link to="/" className="font-medium tracking-wide text-gray-700">
          ←
        </Link>
        <button
          onClick={createPost}
          className="
          font-medium
          tracking-wide
          text-white
          bg-blue-500
          px-5
          py-2
          rounded
          transition-colors
          hover:bg-blue-200"
        >
          投稿する
        </button>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="h-12 w-[600px] text-3xl text-gray-500 font-bold bg-inherit mt-20 mb-5 focus:outline-none"
        />
        <textarea
          placeholder="Write in Markdown"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
          className="w-[600px] h-[400px] rounded block resize-none p-5"
        ></textarea>
        <p className="my-3 w-[600px] text-gray-400 text-xs">
          ※ ルールを守って投稿しましょう
        </p>
      </div>
    </div>
  );
};

export default CreatePost;
