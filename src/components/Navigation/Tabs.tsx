import React from 'react';

import { TabsContainer, NavLink, Item } from './styles';
import { trackClickExternalLink, track } from '@src/utils/analytics';

const tabs = [
  {
    name: 'Preview',
    key: 'preview',
    to: '/',
    exact: true,
    trackingLabel: 'tab-nav-preview',
  },
  {
    name: 'Presets',
    key: 'presets',
    to: '/presets',
    exact: true,
    trackingLabel: 'tab-nav-presets',
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
        <NavLink exact={tab.exact} key={tab.key} to={tab.to} onClick={() => {
          track({ label: tab.trackingLabel });
        }}>
          {tab.name}
        </NavLink>
      ))}
      <Item as='a' onClick={(event) => {
        event.preventDefault();
        triggers.about();
        track({ label: `tab-nav-about` });
      }} >About</Item>
      <Item onClick={() => {
        track({ label: `tab-nav-github` });
      }} as='a' href='https://github.com/campvanilla/boxshadows'
          rel='noopener noreferrer'
          title='boxshadows.com on GitHub'>
          Github
      </Item>
    </TabsContainer>
  );
};
