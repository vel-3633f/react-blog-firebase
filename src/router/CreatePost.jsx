import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
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
    navigate("/")
  };

  return (
    <div className="w-screen min-h-screen bg-gray-200">
      <div>
        <h1>タイトル</h1>
        <input
          type="text"
          placeholder="タイトルを記入"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <h1>投稿</h1>
        <textarea
          placeholder="投稿内容を記入"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
        ></textarea>
      </div>
      <button onClick={createPost}>投稿する</button>
    </div>
  );
};

export default CreatePost;
