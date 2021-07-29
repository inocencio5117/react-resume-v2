import { createGlobalStyle } from 'styled-components';

import { primaryDark } from './Colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${primaryDark};
    color: #fff;
    font-family: 'Roboto', sans-Serif;

    overflow-x: hidden;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
