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
        className="bg-white rounded-xl  flex items-center cursor-pointer border-2 border-gray-200 overflow-hidden duration-100 hover:bg-slate-100"
        onClick={() => setIsOpened((val) => !val)}
      >
        <div className="bg-slate-200 w-[75px] pl-[12px] mr-5">
          <em-emoji id={emojiId} size="3em" />
        </div>
        <div>
          <p>アイキャッチ絵文字を変更</p>
        </div>
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
