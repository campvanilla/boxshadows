import styled from 'styled-components';

interface PresetContainerProps {
  shadow: string;
  backgroundColor: string;
}

export const PresetContainer = styled.article<PresetContainerProps>`
  svg {
    width: 18px;
    height: 18px;
  }

  .base {
    height: 130px;
    width: 130px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.heather};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
  }

  .shadow-preview {
    background-color: ${props => props.theme.colors.white};
    box-shadow: ${(props) => props.shadow};
    height: 90px;
    width: 90px;
    border-radius: 4px;
  }

  display: flex;
  align-items: center;

  .actions-column {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 160px;
    padding-left: 20px;
  }

  .action {
    color: ${(props) => props.theme.colors.hoki};
    stroke: ${(props) => props.theme.colors.hoki};
    path {
      stroke: ${(props) => props.theme.colors.hoki};
    }
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
