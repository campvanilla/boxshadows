import Styled from 'styled-components';

export const PlayAreaContainer = Styled.main`
  flex-grow: 1;
  overflow: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface PreviewProps {
  height: string;
  width: string;
  borderRadius: string;
  borderThickness: string;
  borderColor: string;
  backgroundColor: string;
}

export const Preview = Styled.div<PreviewProps>`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  border: ${props => `${props.borderThickness}px solid ${props.borderColor}`};
  border-radius: ${props => `${props.borderRadius}px`};
  background-color: ${props => props.backgroundColor};
  box-sizing: content-box;
`;
