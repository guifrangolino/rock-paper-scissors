import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  body {
    background-image: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  }
`