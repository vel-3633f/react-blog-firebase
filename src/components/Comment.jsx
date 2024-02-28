import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { format } from "date-fns";

const Comment = ({ comments, id }) => {
  const [commentText, setCommentText] = useState("");
  const [commentUser, setCommentUser] = useState("");
  const [error, setError] = useState("");
  const commentPlus = async () => {
    if (commentText !== "" && commentUser !== "") {
      const updateData = doc(db, "posts", id);
      const newComment = {
        commetText: commentText,
        user: commentUser,
        timeStamp: Timestamp.now(),
      };
      const sendComments = [...comments, newComment];
      console.log(sendComments);
      await updateDoc(updateData, {
        comments: sendComments,
      });
      setError("");
      window.location.reload();
    } else {
      setError("※入力に不備があります");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold my-10 text-center">Comment</h1>
      <div className="w-[95vw] md:w-[55vw] bg-white p-5 md:p-16 rounded-2xl leading-loose mb-5 md:mb-0 md:mr-10">
        <img src="/img/commentImg.png" alt="commentImg" className="my-5" />
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="border-t py-5">
              <div className="flex gap-5 items-center">
                <p className="font-bold text-xl">{comment.user}</p>
                <p className="text-slate-500 text-sm">
                  {comment.timeStamp
                    ? format(
                        comment.timeStamp.toDate(),
                        "yyyy年MM月dd日hh時mm分"
                      )
                    : "date"}
                </p>
              </div>
              <p>{comment.commetText}</p>
            </div>
          ))}
        </div>
        <div className="border-t  my-5 p-3">
          <p className="text-sm mb-2 font-bold">UserName</p>
          <input
            type="text"
            placeholder="Write a userName"
            value={commentUser}
            onChange={(e) => setCommentUser(e.target.value)}
            className="block w-full border-2 focus:border-0 focus:ring-0 p-1 rounded mb-5"
          />
          <p className="text-sm mb-2 font-bold">Comment</p>
          <textarea
            className="block w-full border-2 focus:border-0 focus:ring-0 p-1 rounded"
            rows="3"
            placeholder="Write a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <p className="h-10 text-red-500 font-bold">{error}</p>
          <div className="flex justify-end p-3">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={commentPlus}
            >
              コメントする
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
