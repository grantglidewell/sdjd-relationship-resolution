import theme from "mdx-deck/themes";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";

export default {
  ...theme,
  font: "sans-serif",
  colors: {
    text: "#090807",
    background: "#efefef",
    link: "#070809"
  },
  prism: {
    style: tomorrow
  }
};
