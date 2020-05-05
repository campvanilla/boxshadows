  import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
  colors: {
    wildSand: '#F4F4F4',
    brightTurquoise: '#03DFD8',
    white: '#FFFFFF',
    gallery: '#EBEBEB',
    pacificBlue: '#009AC9',
    cloudBurst: '#253858',
    nepal: '#899DBF',
    heather: '#BFC9D9',
    mischka: '#BFC9D9',
    whiteish: '#FDFDFD',
    hoki: '#647ba0',
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
  }
}

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
