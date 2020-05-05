import Styled from 'styled-components';

interface PlayAreaContainerProps {
  backgroundColor: string;
}

export const PlayAreaContainer = Styled.main<PlayAreaContainerProps>`
  position: relative;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  padding: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.backgroundColor};
`;

interface PreviewProps {
  height: string;
  width: string;
  borderRadius: string;
  borderThickness: string;
  borderColor: string;
  backgroundColor: string;
  shadow: string;
}

export const Preview = Styled.output<PreviewProps>`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  border: ${props => `${props.borderThickness}px solid ${props.borderColor}`};
  border-radius: ${props => `${props.borderRadius}px`};
  background-color: ${props => props.backgroundColor};
  box-sizing: content-box;
  box-shadow: ${props => props.shadow};
`;
