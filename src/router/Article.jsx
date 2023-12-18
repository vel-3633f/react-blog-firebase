import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { db } from "../firebase";
import {
  collection,
  where,
  getDocs,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import Loading from "../components/loading";

const Article = () => {
  const params = useParams();
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(db, "posts"), where("uid", "==", params.id));
      const data = await getDocs(q);
      const aryData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArticleData(aryData[0]);
    };
    getPosts();
  }, []);

  console.log(articleData);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-blue-100">
        <NavBar />
        {articleData ? (
          <div>
            <h1 className="text-4xl font-bold my-10 text-center">
              {articleData.title}
            </h1>
            <div className="flex justify-evenly">
              <div className="w-3/5 bg-white p-16 rounded-2xl leading-loose">
                {articleData.postsText}
              </div>
              <div className="w-1/5 bg-white h-56 p-5 rounded-2xl flex flex-col items-center">
                <p className="font-bold mb-5">{articleData.author.username}</p>
                <button
                  className="bg-red-500 hover:bg-red-400 text-white rounded px-16 py-2"
                  onClick={() => handleDelete(articleData.id)}
                >
                  削除
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Article;
