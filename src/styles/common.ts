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
  height: ${`${window.innerHeight}px`};
  width: 100vw;
  overflow: hidden;
`;

export const EditorWrapper = styled(AppWrapper)`
  display: flex;
`

export const PresetsWrapper = styled(AppWrapper)`
  padding: 60px 40px;
  padding-top: 100px;
  height: 100%;
  min-height: 100vh;
`;
