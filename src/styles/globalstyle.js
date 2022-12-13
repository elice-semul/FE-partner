import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
`;
