import { useMemo, useState } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "zenn-content-css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ToggleButton from "./ToggleButton";

export const Editor = ({ postText, setPostText }) => {
  const [isEditor, setIsEditor] = useState(true);
  const onChange = (value) => {
    setPostText(value);
  };
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      toolbar: [
        "bold",
        "italic",
        "heading-1",
        "heading-2",
        "heading-3",
        "unordered-list",
        "ordered-list",
        "strikethrough",
      ],
    };
  }, []);

  const editorStyle = isEditor ? "translate-x-0 " : "-translate-x-full";

  return (
    <>
      <div className="flex flex-col sm:items-start sm:flex-row">
        <div className="overflow-x-hidden min-w-[95vw] sm:min-w-[65vw] rounded sm:mr-5">
          <div
            className={`flex w-[95vw] sm:w-[65vw] transition duration-500 ${editorStyle}`}
          >
            <SimpleMdeReact
              options={autofocusNoSpellcheckerOptions}
              value={postText}
              onChange={onChange}
              className="min-w-[95vw] sm:min-w-[65vw]"
            />
            <div className="znc min-w-[95vw] sm:min-w-[65vw] bg-white p-5">
              <Markdown remarkPlugins={[remarkGfm]}>{postText}</Markdown>
            </div>
          </div>
        </div>
        <ToggleButton isEditor={isEditor} setIsEditor={setIsEditor} />
      </div>
    </>
  );
};

export default Editor;
