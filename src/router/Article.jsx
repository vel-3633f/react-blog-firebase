import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { auth, db } from "../firebase";
import {
  collection,
  where,
  getDocs,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "../components/Footer";

const Article = () => {
  const params = useParams();
  const [articleData, setArticleData] = useState(null);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user?.uid === articleData?.author.id) {
        setIsUser(true);
      }
    });
    return () => unsubscribe();
  }, [articleData]);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(db, "posts"), where("uid", "==", params.id));
      const data = await getDocs(q);
      const aryData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArticleData(aryData[0]);
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-blue-100">
        <NavBar />
        {articleData ? (
          <>
            <div className="flex items-center flex-col py-10 min-h-screen">
              <em-emoji id={articleData.emojiId} size="4em" />
              <h1 className="text-4xl font-bold mb-10">{articleData.title}</h1>
              <div className="flex justify-evenly">
                <div className="w-[55vw] bg-white p-16 rounded-2xl leading-loose mr-10">
                  <div className="flex mb-10">
                    {articleData.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="border-2 py-1 px-3 mx-1 rounded-full border-gray-300 text-sm"
                      >
                        {topic.name}
                      </div>
                    ))}
                  </div>
                  <div className="znc">
                    <Markdown remarkPlugins={[remarkGfm]}>
                      {articleData.postsText}
                    </Markdown>
                  </div>
                </div>
                <div className="w-[20vw] bg-white h-56 p-5 rounded-2xl flex flex-col items-center">
                  <p className="font-bold mb-5">
                    {articleData.author.username}
                  </p>
                  {isUser ? (
                    <>
                      <button
                      className="bg-blue-400 hover:bg-blue-300 text-white rounded px-16 py-2 mb-10"
                      onClick={() => handleDelete(articleData.id)}
                    >
                      編集
                    </button>
                      <button
                      className="bg-red-500 hover:bg-red-400 text-white rounded px-16 py-2"
                      onClick={() => handleDelete(articleData.id)}
                    >
                      削除
                    </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Article;
