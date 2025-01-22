import { createGlobalStyle } from "styled-components";

export const CHeaderHeight = 56;
export const CMaxWidth = 550;
export const CMaxWebWidth = 2400;
export const CNewsBackgroundColor = "#F4F5F9";
export const device = {
  mobile: 450,
  tablet: 850,
  largeTablet: 1000,
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 10px;
    width: 9px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export default GlobalStyle;
