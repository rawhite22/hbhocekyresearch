import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
     a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
    
    body {
      background-color: #e8e8e8;
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
    } 
    img,
    picture {
              max-width: 100%;
              display: block;
    }
`
export default GlobalStyles
