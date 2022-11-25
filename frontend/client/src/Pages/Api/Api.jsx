import { useTheme } from "@mui/material";
import { ApiGlobalStyle, Benefits, Cards, Faqs, Hero } from "./components";

const Api = () => {
  const theme = useTheme()
	const DarkMode = theme.palette.mode === 'dark'

	const textColor = DarkMode ? "#000" : ""

  return (
    <div className="fro-51-api" style={{color:textColor}}>
      <ApiGlobalStyle />
      <Hero />
      <Cards />
      <Benefits />
      <Faqs />
    </div>
  )
}

export default Api;