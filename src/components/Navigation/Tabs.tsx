import React from 'react';

import { TabsContainer, NavLink, Item } from './styles';

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
        <a href='https://github.com/campvanilla/boxshadows' target='_blank' rel='noopener noreferrer' title='boxshadows.com on GitHub'>
          Github
        </a>
      </Item>
    </TabsContainer>
  );
};
