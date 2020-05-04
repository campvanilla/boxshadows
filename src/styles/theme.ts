import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
  colors: {
    heather: '#BFC9D9',
    cloudBurst: '#253858',
    wildSand: '#F4F4F4',
    brightTurquoise: '#03DFD8',
    white: '#FFFFFF',
    gallery: '#EBEBEB',
    pacificBlue: '#009AC9',
    nepal: '#899DBF',
    mischka: '#BFC9D9',
    whiteish: '#FDFDFD',
  }
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Theme.colors;
  }
}

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
