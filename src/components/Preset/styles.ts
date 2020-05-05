import styled from 'styled-components';

interface PresetContainerProps {
  shadow: string;
}

export const PresetContainer = styled.article<PresetContainerProps>`
  .base {
    height: 130px;
    width: 130px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.brightTurquoise};
    box-shadow: ${(props) => props.shadow};
  }

  display: flex;
  align-items: center;

  .actions-column {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 160px;
  }

  .action {
    color: ${(props) => props.theme.colors.heather};
    transition: color 0.15s ease-out;
    font-size: 12px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-bottom: 4px;
    }

    :hover {
      stroke: ${(props) => props.theme.colors.brightTurquoise};
      path {
        stroke: ${(props) => props.theme.colors.brightTurquoise};
      }
      color: ${(props) => props.theme.colors.brightTurquoise};
    }
  }
`;
