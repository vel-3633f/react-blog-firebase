import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CreateNavBar from "../components/CreateNavBar";
import CreateSideMenu from "../components/CreateSideMenu";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [error, setError] = useState("");
  const [emojiId, setEmojiId] = useState("star-struck");
  const [isSideOpen, setIsSideOpen] = useState(false);
  const navigate = useNavigate();

  const createPost = async () => {
    if (title !== "" && postText !== "") {
      await addDoc(collection(db, "posts"), {
        uid: uuidv4(),
        title: title,
        postsText: postText,
        emojiId: emojiId,
        topics: [],
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
      <CreateSideMenu emojiId={emojiId} setEmojiId={setEmojiId} isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <CreateNavBar createPost={createPost} setIsSideOpen={setIsSideOpen} />
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
        <div></div>
      </div>
    </div>
  );
};
export default CreatePost;
