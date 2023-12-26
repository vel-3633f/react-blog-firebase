import { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function FixedTags({ value, setValue }) {
  const fixedOptions = [];
  const [error, setError] = useState("");

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          try {
            if (newValue.length > 5) {
              throw new Error("トピックは最大5つまで登録できます");
            }
            setValue([
              ...newValue.filter(
                (option) => fixedOptions.indexOf(option) === -1
              ),
            ]);
          } catch (e) {
            setError(e.message);
          }
        }}
        options={topicSummary}
        getOptionLabel={(option) => option.name}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option.name} {...getTagProps({ index })} key={index} />
          ))
        }
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="トピックを入力してください" />
        )}
      />
      <p className="h-10 pt-3 text-red-500 text-sm">{error}</p>
    </div>
  );
}

const topicSummary = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Vue.js" },
  { name: "Express.js" },
  { name: "Ruby on Rails" },
  {
    name: "Angular",
  },
  { name: "Frontend" },
  { name: "Backend" },
  { name: "API" },
  { name: "AJAX" },
  {
    name: "Library",
  },
  { name: "Git" },
];
