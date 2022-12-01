import { useTheme } from "@mui/material";
import Article from "./components/article/Article";
import ComplaintQuery from "./components/complaint-query/ComplaintQuery";
import ComplaintForm from "./components/complaint-form/ComplaintForm";
import Hero from "./components/hero/Hero";
import Support from "./components/support/Support";
import Topic from "./components/topic/Topic";

const FileAComplaint = () => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";

  const textColor = DarkMode ? "#fff" : "";
  return (
    <>
      <Hero />
      <Topic textColor={textColor} />
      <Support />
      <Article textColor={textColor} />
      <ComplaintQuery />
      <ComplaintForm />
    </>
  );
};

export default FileAComplaint;
