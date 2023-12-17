import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import NavBar from "../components/NavBar";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <>
      <NavBar isAuth={isAuth} />
      <div className="w-screen min-h-screen bg-gray-200">
        <div className="homePage">
          {postLists.map((postList) => {
            return (
              <div className="postContents" key={postList.id}>
                <div className="postHeader">
                  <div className="title">
                    <h1>{postList.title}</h1>
                  </div>
                </div>
                <div className="postTextContainer">{postList.postsText}</div>
                <div className="nameAndDeleteButton">
                  <h3>{postList.author.username}</h3>
                  {postList.author.id === auth.currentUser?.uid && (
                    <button onClick={() => handleDelete(postList.id)}>
                      削除
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
