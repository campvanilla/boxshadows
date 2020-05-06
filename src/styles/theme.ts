  import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
  fonts: {
    body: `'Roboto', sans-serif;`,
    logo: `font-family: 'Source Sans Pro', sans-serif;`,
  },
  colors: {
    brightTurquoise: '#03DFD8',
    white: '#FFFFFF',
    whiteish: '#FDFDFD',
    wildSand: '#F4F4F4',
    gallery: '#EBEBEB',
    pacificBlue: '#009AC9',
    cloudBurst: '#253858',
    nepal: '#899DBF',
    hoki: '#647ba0',
    heather: '#BFC9D9',
    slateGray: '#747F92',
    shark: '#1E2428',
  },
  zIndices: {
    tabsNavigation: 5,
  },
  breakpoints: {
    medium: '1000px',
    large: '52em',
    xlarge: '64em'
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Theme.colors;
    zIndices: typeof Theme.zIndices;
    breakpoints: typeof Theme.breakpoints;
    fonts: typeof Theme.fonts;
  }
}

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
