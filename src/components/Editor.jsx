import { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const Editor = ({postText,setPostText}) => {
  const [markdownValue, setMarkdownValue] = useState();

  const onChange = (value) => {
    setPostText(value);
    console.log(value)
  };

  return <SimpleMde value={postText} onChange={onChange} className="w-[600px]"/>;
};

export default Editor;
