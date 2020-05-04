import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
}

export const SwitchContainer = styled.span<SwitchProps>`
  background-color: ${props => props.checked ? props.theme.colors.brightTurquoise : props.theme.colors.heather};
  width: 34px;
  border-radius: 15px;
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  .knob {
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.white};
    transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};

    transition: transform 0.15s ease-out;
  }
`;
