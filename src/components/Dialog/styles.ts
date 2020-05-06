import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.15s;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const DialogContainer = styled.dialog`
  height: auto;
  max-height: 70%;
  overflow-y: auto;
  max-width: 85%;

  padding: 24px 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.heather};

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    max-width: 55%;
  }
`;
