import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  border: 1px solid ${props => props.theme.colors.cloudBurst};
  background: ${props => props.theme.colors.white};
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;

  transition: border 0.15s ease-out;

  :hover {
    border: 1px solid ${props => props.theme.colors.brightTurquoise};
    cursor: pointer;
  }

  ${props => props.disabled && css`
    border: 1px solid ${props => props.theme.colors.hoki};
    color: ${props => props.theme.colors.hoki};

    :hover {
      border: 1px solid ${props => props.theme.colors.hoki};
      cursor: not-allowed;
    }
  `}
`;
