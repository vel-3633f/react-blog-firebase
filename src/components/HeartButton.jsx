import { motion } from "framer-motion";

const HeartButton = () => {
  return (
    <motion.button
      className="place-center p-3 bg-red-500 text-white rounded-lg mb-10"
      whileTap={{
        scale: 1.1,
        backgroundColor: "#FDE5E5",
        color: "rgb(239 68 68)",
      }}
    >
      ♥ 1000
    </motion.button>
  );
};

export default HeartButton;
