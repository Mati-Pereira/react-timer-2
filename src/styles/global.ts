import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
body{
  font-family: ${({ theme }) => theme.colors.fontPrimary};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textColor};
  transition: 0.25s all;
}
`;
