import { createGlobalStyle } from 'styled-components';
import * as GibsonFont from '../assets/fonts/Gibson/Gibson.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gibson';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Gibson'), url(${GibsonFont}) format('woff2');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Gibson;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color};
  }
`;
