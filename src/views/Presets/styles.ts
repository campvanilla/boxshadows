import styled from 'styled-components';

export const Heading = styled.h3`
  font-size: 16px;
  margin: 0;
  margin-bottom: 24px;
  display: inline-block;

  ::after {
    display: inline-block;
    position: relative;
    height: 1px;
    content: ' ';
    bottom: 8px;
    width: 60%;
    background-color: ${props => props.theme.colors.heather};
  }
`;

export const Row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  .item {
    margin: 0 48px;
    margin-bottom: 90px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
