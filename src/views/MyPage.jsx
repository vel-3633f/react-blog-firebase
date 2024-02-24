import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { format } from "date-fns";

const MyPage = () => {
  const [postLists, setPostLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserUid(user?.uid || null);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        if (userUid) {
          const q = query(
            collection(db, "posts"),
            where("author.id", "==", userUid)
          );
          const data = await getDocs(q);
          setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(true);
      }
    };

    getPosts();
  }, [userUid]);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <h1 className="font-bold text-4xl text-center py-10">Articles</h1>
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 gap-3 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-3">
            {postLists.map((postList) => (
              <Link to={`/article/${postList.uid}`} key={postList.id}>
                <Card
                  title={postList.title}
                  emojiId={postList.emojiId}
                  name={postList.author.username}
                  date={format(postList.timeStamp.toDate(), "yyyy年MM月dd日")}
                />
              </Link>
            ))}
          </div>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MyPage;
