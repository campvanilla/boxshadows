import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-weight: 400;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    color: ${(props) => props.theme.colors.cloudBurst};
    font-size: 14px;
    font-family: ${(props) => props.theme.fonts.body};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    display: block;
  }

  /**
   * Remove the gray background on active links in IE 10.
   */
  a { background-color: transparent; }

  b, strong {
    font-weight: 500;
  }

  small {
    font-size: 75%;
  }

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }
`;

export default GlobalStyles;
