import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  font-size: inherit;
  padding: 8px;
  color: currentColor;
  border: none;
  width: 100%;

  &, &:hover, &:active, &:focus {
    outline: none;
  }
`;

export const Addon = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  color: ${props => props.theme.colors.heather};
  user-select: none;
`;

export const FieldContainer = styled.span<{
  fieldFocused: boolean;
}>`
  border: 1px solid ${props => props.theme.colors.heather};
  background-color: ${props => props.theme.colors.white};
  display: inline-flex;
  align-items: center;
  transition: border-color 0.15s ease-out;

  &, ${StyledInput} {
    border-radius: 4px;
  }

  ${props => props.fieldFocused && css`
    border-color: ${props.theme.colors.pacificBlue};
  `}

  &:hover {
    border-color: ${props => props.theme.colors.nepal};
  }
`;
