import { useMemo } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "zenn-content-css";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Editor = ({ postText, setPostText }) => {
  const onChange = (value) => {
    setPostText(value);
    console.log(value);
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
        "strikethrough"
    ]
    };
  }, []);

  return (
    <div>
      <SimpleMdeReact
        options={autofocusNoSpellcheckerOptions}
        value={postText}
        onChange={onChange}
      />
      <div className="znc">
      <Markdown remarkPlugins={[remarkGfm]}>{postText}</Markdown>
      </div>
    </div>
      
  );
};

export default Editor;
