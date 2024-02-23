import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import topicSummary from "../data/topic";

const SearchTopic = () => {
  return (
    <>
      <NavBar />
      <div className="p-10 place-center flex-col">
        <h1 className="font-bold text-lg mb-10">人気のトピック</h1>
        <div className="grid grid-cols-2  sm:grid-cols-4 gap-5">
          {topicSummary.map((topic) => {
            return (
              <>
                <Link
                  className="place-center flex-col px-3 py-5 border-gray-300 border rounded-lg max-w-[150px] h-[110px] hover:bg-slate-200 duration-500"
                  to={`/search/${topic.name}`}
                >
                  <topic.iconName size="3rem" />
                  <p>{topic.name}</p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchTopic;
