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
  }
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Theme.colors;
  }
}

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
