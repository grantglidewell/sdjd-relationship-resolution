import theme from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
  ...theme,
  font: "sans-serif",
  colors: {
    text: "#090807",
    background: "#efefef",
    link: "#070809"
  },
  prism: {
    style: okaidia
  }
};
