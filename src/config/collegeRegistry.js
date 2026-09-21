import tejaContent from "../colleges/teja/content";
import tejaTheme from "../colleges/teja/theme";

import cognizantContent from "../colleges/cognizant/content";
import cognizantTheme from "../colleges/cognizant/theme";

import gitamContent from "../colleges/gitam/content";
import gitamTheme from "../colleges/gitam/theme";

const collegeRegistry = {
  teja: {
    id: "teja",
    content: tejaContent,
    theme: tejaTheme
  },
  cognizant: {
    id: "cognizant",
    content: cognizantContent,
    theme: cognizantTheme
  },
  gitam: {
    id: "gitam",
    content: gitamContent,
    theme: gitamTheme
  }
};

export default collegeRegistry;
