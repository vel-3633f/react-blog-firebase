import { useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CreateNavBar from "../components/CreateNavBar";
import CreateSideMenu from "../components/CreateSideMenu";
import Editor from "../components/Editor";
import { useAuthContext } from "../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("Write Markdown");
  const [value, setValue] = useState([]);
  const [error, setError] = useState("");
  const [emojiId, setEmojiId] = useState("star-struck");
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const { user } = useAuthContext();
  const params = useParams();
  const navigate = useNavigate();

  const createPost = async () => {
    if (title !== "" && postText !== "") {
      await addDoc(collection(db, "posts"), {
        uid: uuidv4(),
        title: title,
        postsText: postText,
        emojiId: emojiId,
        topics: [...value],
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      setError("");
      navigate("/");
    } else {
      setError("※入力に不備があります");
    }
  };

  const updatePost = async () => {
    if (title !== "" && postText !== "") {
      const updateData = doc(db, "posts", params.id);
      await updateDoc(updateData, {
        title: title,
        postsText: postText,
        emojiId: emojiId,
        topics: [...value],
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });

      setError("");
      navigate("/");
    } else {
      setError("※入力に不備があります");
    }
  };

  useEffect(() => {
    if (params.id !== "new") {
      setIsNew(false);
      getPosts();
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const getPosts = async () => {
    const q = doc(db, "posts", params.id);
    const data = (await getDoc(q)).data();
    console.log("Data fetched:", data);
    setTitle(data.title)
    setEmojiId(data.emojiId)
    setPostText(data.postsText)
    setValue(data.topics)
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center">
      <CreateSideMenu
        emojiId={emojiId}
        setEmojiId={setEmojiId}
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
        value={value}
        setValue={setValue}
      />
      <CreateNavBar
        createPost={createPost}
        updatePost={updatePost}
        setIsSideOpen={setIsSideOpen}
        isNew={isNew}
      />
      <div className="flex">
        <div>
          <p className="h-20 text-red-500 font-bold">{error}</p>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="h-12 w-[80vw] sm:w-[600px] text-3xl text-gray-500 font-bold bg-inherit mb-5 focus:outline-none"
          />
          <Editor postText={postText} setPostText={setPostText} />
          <p className="my-3 sm:w-[600px] text-gray-400 text-xs">
            ※ ルールを守って投稿しましょう
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
