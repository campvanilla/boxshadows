import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-weight: 400;
    color: ${props => props.theme.colors.cloudBurst};
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  #app {
    display: flex;
  }
`

export default GlobalStyles;
