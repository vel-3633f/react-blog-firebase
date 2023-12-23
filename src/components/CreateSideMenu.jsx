import EmojiSelector from "./EmojiSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateSideMenu = ({ emojiId, setEmojiId, isSideOpen, setIsSideOpen }) => {
  const bgMenuStyle = isSideOpen ? "bg-opacity-50" : "bg-opacity-0 invisible";
  const menuStyle = isSideOpen ? "translate-x-0 " : "translate-x-full";

  return (
    <>
      <div
        className={`bg-slate-800  fixed w-screen h-screen transition duration-1000 ${bgMenuStyle}`}
      ></div>
      <div
        className={`h-screen bg-white w-1/2 p-10 absolute transition duration-500 right-0 ${menuStyle}`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="h-7 w-7 hover:bg-gray-100 p-2 rounded-full transition"
          onClick={() => {
            setIsSideOpen(false);
          }}
        />
        <EmojiSelector emojiId={emojiId} setEmojiId={setEmojiId} />
      </div>
    </>
  );
};

export default CreateSideMenu;