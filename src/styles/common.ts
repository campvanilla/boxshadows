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
  overflow: hidden;
  display: flex;
`;
