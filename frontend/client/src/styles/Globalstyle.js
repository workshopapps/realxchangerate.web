import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none !important;
    }

`;

export default GlobalStyle;
