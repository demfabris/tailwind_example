import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --sg: #0077B6;
    --alt: #CAF0F8;
    --hg: #F68421;
    --bg: #EDFAFD;
    --fg: #020F12;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins';
    color: var(--fg);
  }

  html,
  body,
  #__next {
    background: var(--white);
    min-height: 100vh;
  }

  body {
    overflow-y: scroll;
  }

  h1,
  p,
  span,
  a {
    color: var(--black);
  }


`
