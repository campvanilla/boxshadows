import Styled from 'styled-components';

export const Container = Styled.span`
  border: 1px solid ${props => props.theme.colors.heather};
  padding: 8px;
  border-radius: 4px;

  .input {
    border: none;
    outline: none;
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
