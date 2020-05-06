import styled from 'styled-components';

export const PresetsWrapper = styled.section`
  padding: 60px 40px;
  padding-top: 0;
  height: 100%;
  max-height: 100%;
`;


export const Heading = styled.h2`
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

export const AsideNavHeader = styled.h2`
  text-transform: uppercase;
  padding: 15px 20px;
  font-size: 18px;
  letter-spacing: 2px;
  margin: 0;
  margin-top: 10px;
`;

export const PresetNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 15px 20px;
  margin: 0;
`;

export const PresetNavItem = styled.li`
  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    border-left: 3px solid transparent;
    color: ${props => props.theme.colors.cloudBurst};

    &:hover {
      border-left-color: ${props => props.theme.colors.brightTurquoise};
    }
  }
`;
