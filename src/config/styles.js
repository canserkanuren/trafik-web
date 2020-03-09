import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color};
  }
`;
