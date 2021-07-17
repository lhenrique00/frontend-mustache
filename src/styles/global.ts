import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/bebas-neue-v2-latin-regular.woff2') format('woff2');
  }

  /* inter-300 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/inter-v3-latin-300.woff2') format('woff2');
  }
  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
  }
  /* inter-700 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/inter-v3-latin-700.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
