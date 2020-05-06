import styled from 'styled-components';

export const AsideHeaderIcons = styled.span`
  padding: 13px;

  svg {
    width: 18px;
    margin-left: 20px;
    cursor: pointer;
  }

  svg path {
    stroke: ${(props) => props.theme.colors.nepal};
  }

  svg:hover path {
    stroke: ${(props) => props.theme.colors.cloudBurst};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: none;
  }
`;
