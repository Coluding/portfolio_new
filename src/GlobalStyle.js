// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Sriracha&display=swap');


  body {
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

