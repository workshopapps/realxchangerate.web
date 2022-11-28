import { amber, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
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
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[900],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
  },
});
