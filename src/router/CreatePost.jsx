import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import EmojiSelector from "../components/EmojiSelector";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [error, setError] = useState("");
  const [emojiId, setEmojiId] = useState("star-struck");
  const navigate = useNavigate();

  const createPost = async () => {
    if (title !== "" && postText !== "") {
      await addDoc(collection(db, "posts"), {
        uid: uuidv4(),
        title: title,
        postsText: postText,
        emojiId: emojiId,
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      setError("");
      navigate("/");
      setEmojiId("star-struck");
    } else {
      setError("※入力に不備があります");
    }
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
        <div>
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
      </div>
      <div className="flex">
        <div>
          <p className="h-20 text-red-500 font-bold">{error}</p>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="h-12 w-[600px] text-3xl text-gray-500 font-bold bg-inherit mb-5 focus:outline-none"
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
        <div>
          <EmojiSelector emojiId={emojiId} setEmojiId={setEmojiId} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
