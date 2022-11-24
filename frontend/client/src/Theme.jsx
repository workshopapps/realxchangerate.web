import { createTheme } from "@mui/material";
// import "@fontsource/inter";

const theme = createTheme({
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
});

export default theme;
