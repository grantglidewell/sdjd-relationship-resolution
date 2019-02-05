import theme from "mdx-deck/themes";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";
import Provider from "./Provider";
export default {
  ...theme,
  font: "Montserrat",
  Provider,
  colors: {
    text: "#a7afbf",
    background: "#1b202c",
    link: "#070809"
  },
  prism: {
    style: tomorrow
  }
};
