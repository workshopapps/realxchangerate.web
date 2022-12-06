import "styled-components";
import { Theme } from "@mui/material/styles";

interface CustomTheme {
  $styled: {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
    };
    colors: {
      body: string;
      cardBackground: string;

      // gray
      text900: string;
      text600: string;
      text500: string;
      text400: string;
      text300: string;
      text200: string;
      text50: string;

      // blue
      blue50: string;

      // red
      red500: string;

      // green
      green500: string;
      green50: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
}
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// Now Material ui has some extra custom variables, and also styled-components also inherits Material-ui’s Theme object, making them sync
