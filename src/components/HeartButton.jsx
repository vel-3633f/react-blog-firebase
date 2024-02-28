import { motion } from "framer-motion";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const HeartButton = ({ heartNum, id }) => {
  const [updatedHeartNum, setUpdatedHeartNum] = useState(heartNum);
  const [isClicked, setIsClicked] = useState(false);
  const heartPlus = async () => {
    const updateData = doc(db, "posts", id);
    console.log(id);
    const number = heartNum + 1;
    await updateDoc(updateData, {
      heartNum: number,
    });
    setIsClicked(true);
    setUpdatedHeartNum(updatedHeartNum + 1);
  };
  return (
    <>
      <motion.button
        className="place-center p-3 bg-red-500 text-white rounded-lg mb-10 min-w-[100px] "
        whileTap={{
          scale: 1.1,
          backgroundColor: "#FDE5E5",
          color: "rgb(239 68 68)",
        }}
        onClick={heartPlus}
        disabled={isClicked}
      >
        ♥ {updatedHeartNum}
      </motion.button>
    </>
  );
};

export default HeartButton;
