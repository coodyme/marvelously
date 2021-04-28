import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100vh
  }

  body {
    color: ${props => props.theme.text};
    background: ${props => props.theme.background};
  }

  /*#root {
    display: flex;
    align-items: center;
    justify-content: center;
  }*/

  body, input, button, textarea {
    font: 500 1.6rem Roboto, sans-serif;
  }

`
