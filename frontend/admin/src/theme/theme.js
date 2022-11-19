import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e6efff", // primary sky-blue color
    },
    secondary: {
        main: "#00368c", // secondary
    }
  },

  // custom variables

  $styled: {
    borderRadius: {
        sm: '0.2rem'
    },
    colors: {
        blue_shed: 'blue'
    }
  }
});
