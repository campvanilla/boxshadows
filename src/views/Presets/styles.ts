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

  justify-content: space-evenly;

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    justify-content: initial;
  }

  .item {
    margin: 0 40px;
    margin-bottom: 40px;
  }
`;

export const PageHeader = styled.header`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 45px;
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  width: 100%;
  z-index: 4;

  .logo {
    height: 30px;
    width: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 85px;
  }
`;
