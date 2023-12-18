import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Loading from "../components/loading";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(true);
    };
    getPosts();
  }, []);

  console.log(postLists);

  return (
    <>
      <div className="w-screen min-h-screen bg-blue-100">
        <NavBar isAuth={isAuth} />
        <h1 className="font-bold text-4xl text-center py-10">Articles</h1>
        {isLoading ? (
          <div className="grid grid-cols-2 w-3/4 mx-auto">
            {postLists.map((postList) => {
              return (
                <Link
                  to={`/article/${postList.uid}`}
                  className="my-10"
                  key={postList.id}
                >
                  <div className="flex">
                    <div className="bg-white rounded-xl w-24 h-24 mr-3 flex justify-center">
                      <em-emoji id="bird" size="4em"></em-emoji>
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl">{postList.title}</h1>
                      <p className="font-bold text-sm">
                        {postList.author.username}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
