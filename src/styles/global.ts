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
    background-image:
    linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)),
    url('images/bg.jpg');
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
  }

  /*#root {
    display: flex;
    align-items: center;
    justify-content: center;
  }*/

  body, input, button, textarea {
    font: 500 1.6rem Roboto, sans-serif;
  }

  @keyframes fadeInOpacity {
    0% {
      background: ${props => props.theme.background};
    }
    100% {
      background: '#090909'
    }
  }

`
