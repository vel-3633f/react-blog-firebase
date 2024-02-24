import { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { topicNameOnly } from "../data/topic";
export default function FixedTags({ value, setValue }) {
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
              throw new Error("トピックは最大5つまでしか登録できません");
            }
            setValue([...newValue]);
          } catch (e) {
            setError(e.message);
          }
        }}
        options={topicNameOnly}
        getOptionLabel={(option) => option}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} key={index} />
          ))
        }
        style={{ width: 100 + "%" }}
        renderInput={(params) => (
          <TextField {...params} placeholder="トピックを入力してください" />
        )}
      />
      <p className="h-10 pt-3 text-red-500 text-sm">{error}</p>
    </div>
  );
}
