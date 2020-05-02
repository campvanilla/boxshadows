import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
  colors: {
    heather: '#BFC9D9',
    cloudBurst: '#253858',
    wildSand: '#F4F4F4',
    brightTurquoise: '#03DFD8',
  }
};

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
