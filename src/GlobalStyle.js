import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


*,*::before,*::after{
  box-sizing:border-box;
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* border:1px solid red; */
}
`;

export default GlobalStyle;
