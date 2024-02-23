import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Card from "../components/Card";
import { Footer } from "../components/Footer";
import Loading from "../components/Loading";

const TopicPage = () => {
  const urlParameters = useParams();
  const topicName = urlParameters.topicName;
  const [postLists, setPostLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("topics", "array-contains", topicName)
        );
        const data = await getDocs(q);
        setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(true);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <h1 className="font-bold text-4xl text-center py-10">
        {topicName.toUpperCase()}
      </h1>
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 gap-3 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-3 min-h-screen">
            {postLists.map((postList) => (
              <Link to={`/article/${postList.uid}`} key={postList.id}>
                <Card
                  title={postList.title}
                  emojiId={postList.emojiId}
                  name={postList.author.username}
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

export default TopicPage;
