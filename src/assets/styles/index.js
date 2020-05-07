import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    font-family: 'Nunito';
    color: rgb(106, 124, 149);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    margin: 0;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0px;
    width: 100%;
    padding: 0px auto;
    background: #fbfdff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: 0 !important;
  }
 
`;

export default GlobalCSS;
