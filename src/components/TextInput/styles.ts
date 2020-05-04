import Styled from 'styled-components';

export const Container = Styled.span`
  border: 1px solid ${props => props.theme.colors.heather};
  padding: 8px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  max-height: 34px;

  .input {
    border: none;
    outline: none;
    width: 100%;
  }

  .append,
  .prepend {
    color: ${props => props.theme.colors.heather};
  }

  .prepend {
    margin-right: 4px;
  }

  .append {
    margin-left: 4px;
  }
`;
