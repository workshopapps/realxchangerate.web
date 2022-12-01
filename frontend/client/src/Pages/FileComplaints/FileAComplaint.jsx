import { useTheme } from "@mui/material";
import Article from "./components/article/Article";
import Hero from "./components/hero/Hero";
import Support from "./components/support/Support";
import Topic from "./components/topic/Topic";

const FileAComplaint = () => {
  const theme = useTheme()
	const DarkMode = theme.palette.mode === 'dark'

	const textColor = DarkMode ? "#fff" : ""
  return (
    <>
      <Hero />
      <Topic textColor={textColor}/>
      <Support />
      <Article textColor={textColor}/>
    </>
  );
};

export default FileAComplaint;
