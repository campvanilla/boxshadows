import React from 'react';
import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

const NAV_LINK_ACTIVE_CLASSNAME = 'active';

const NavLink = styled(BaseNavLink).attrs({
  activeClassName: NAV_LINK_ACTIVE_CLASSNAME,
})`
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.theme.colors.cloudBurst};
  display: inline-flex;
  padding: 8px 14px;
  background-color: transparent;
  transition: background-color 0.4s cubic-bezier(.17,.67,.76,.77);
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: ${props => props.theme.colors.gallery};
  }

  &.${NAV_LINK_ACTIVE_CLASSNAME} {
    border-bottom: 3px solid ${props => props.theme.colors.brightTurquoise};
  }
`;

const Item = styled.div`
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.colors.cloudBurst};
  display: inline-flex;
  padding: 8px 14px;
  background-color: transparent;
  transition: background-color 0.4s cubic-bezier(0.17, 0.67, 0.76, 0.77);
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gallery};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const TabsContainer = styled.nav`
  display: inline-flex;
  position: fixed;
  background-color: ${props => props.theme.colors.white};
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 5;

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    padding: 25px;
  }
`;

const tabs = [
  {
    name: 'Preview',
    key: 'preview',
    to: '/',
    exact: true,
  },
  {
    name: 'Presets',
    key: 'presets',
    to: '/presets',
    exact: true,
  },
];

interface TabsProps {
  triggers: {
    [triggerName: string]: (...args) => void;
  };
}

export const Tabs: React.FC<TabsProps> = ({ triggers }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <NavLink exact={tab.exact} key={tab.key} to={tab.to}>
          {tab.name}
        </NavLink>
      ))}
      <Item onClick={triggers.about}>
        About
      </Item>
      <Item onClick={triggers.about}>
        <a href='https://github.com/campvanilla/boxshadows' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </Item>
    </TabsContainer>
  );
};
