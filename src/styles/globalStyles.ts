import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.colors.cloudBurst};
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles;
