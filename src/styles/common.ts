import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AppWrapper = styled.div`
  animation: ${fadeIn} 0.75s;
  height: 100vh;
  width: 100vw;
`;

export const EditorWrapper = styled(AppWrapper)`
  overflow: hidden;
  display: flex;
`

export const PresetsWrapper = styled(AppWrapper)`
  padding: 60px 40px;
  padding-top: 100px;
`;
