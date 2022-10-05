import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    background: ${props => props.theme.background};
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    color: ${props => props.theme.text};
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles