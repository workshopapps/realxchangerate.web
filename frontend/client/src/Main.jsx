import React, { useState, useMemo, createContext } from "react";
import { ThemeProvider, createTheme, Box, CssBaseline } from "@mui/material";
import App from "./App";
import { getDesignTokens } from "./styles/DarkMode";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Main = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  
    breakpoints: {
      values: {
        xs: 200,
        sm: 481,
        md: 769,
        lg: 1025,
        xl: 1201,
      },
    },
    palette: {
      mode}

  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{ backgroundColor: "background.default", color: "text.primary" }}
        >
          <App />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Main;
