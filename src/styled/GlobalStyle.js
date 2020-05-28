// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-family: 'Spartan', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: grayscale;
    }

    body {
        box-sizing: border-box;
        min-height: 100vh;
        background-color: hsl(180, 52%, 96%);
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;