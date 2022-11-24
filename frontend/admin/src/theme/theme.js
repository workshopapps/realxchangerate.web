import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      // blue500
      main: '#0062FF'
    },
    secondary: {
      // blue800
      main: '#00368C'
    }
  },

  //custom theme variables
  $styled: {
    borderRadius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
    },
    colors: {
      body: '#FFF',
      sideBarBackground: '#F8FAFC',

      // gray
      text900: '#0F172A',
      text600: '#475569',
      text500: '#64748B',
      text400: '#94A3B8',
      text300: '#CBD5E1',
      text200: '#E2E8F0',
      text50: '#F8FAFC',

      // blue
      blue50: '#E6EFFF',

      // red
      red500: '#EF4444',

      // green
      green500: '#10B981',
      green50: '#ECFBF5',
    },
    breakpoints: {
      sm: '0px',
      md: '600px',
      lg: '900px',
      xl: '1200px',
    }
  }
});


// MUI Breakpoints

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

