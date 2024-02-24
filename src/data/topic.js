import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs } from "react-icons/fa";

const topicSummary = [
  {
    name: "html",
    iconName: FaHtml5,
  },
  { name: "css", iconName: FaCss3Alt },
  { name: "javascript", iconName: SiJavascript },
  { name: "typescript", iconName: SiTypescript },
  { name: "react", iconName: FaReact },
  { name: "vue.js", iconName: FaVuejs },
];
const topicNameOnly = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "vue.js",
];

export { topicSummary, topicNameOnly };
