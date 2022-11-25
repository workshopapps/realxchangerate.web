import "./index.css";
import { useTheme } from "@mui/material";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Trusted from "./components/Trusted";
import Usage from "./components/Usage";

const IntegrationMatrix = () => {
  const theme = useTheme()
	const DarkMode = theme.palette.mode === 'dark'

	const textColor = DarkMode ? "#fff" : ""

  return (
    <div style={{ "max-width": "1440px", margin: "0 auto",  }}>
      <Hero textColor={textColor}/>
      <Trusted />
      <Info/>
      <Usage textColor={textColor}/>
      <Pricing />
      <Faqs textColor={textColor}/>
    </div>
  );
};

export default IntegrationMatrix;
