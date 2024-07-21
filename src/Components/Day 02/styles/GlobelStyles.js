import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 100px;
    font-family: ${props => props.theme.fonts.body};
    background-color: #f0f0f0;
    color: #333;
  }
`;

export default GlobalStyles;
