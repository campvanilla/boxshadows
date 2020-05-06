import styled from 'styled-components';

interface PresetContainerProps {
  shadow: string;
  backgroundColor?: string;
  elementColor?: string;
}

export const PresetContainer = styled.article<PresetContainerProps>`
  svg {
    width: 18px;
    height: 18px;
  }

  .base {
    height: 170px;
    width: 300px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.heather};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor || props.theme.colors.white};
  }

  .shadow-preview {
    background-color: ${props => props.elementColor || props.theme.colors.white};
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
    margin-bottom: 8px;

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
