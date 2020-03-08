import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;
