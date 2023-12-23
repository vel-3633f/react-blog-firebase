import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

const EmojiSelector = ({ emojiId, setEmojiId }) => {
  const [isOpened, setIsOpened] = useState(false);

  const emojiClick = (val) => {
    setEmojiId(val.id);
    setIsOpened(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-white rounded-xl w-24 h-24  flex justify-center cursor-pointer border-2 border-gray-300"
        onClick={() => setIsOpened((val) => !val)}
      >
        <em-emoji id={emojiId} size="4em" />
      </div>
      {isOpened && (
        <div className="absolute top-20">
          <Picker
            data={data}
            onEmojiSelect={emojiClick}
            previewPosition="none"
          />
        </div>
      )}
    </div>
  );
};


export default EmojiSelector;
