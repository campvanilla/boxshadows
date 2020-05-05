import React, { useState } from 'react';

import Logo from '@assets/logo-light-medium-400x70.png';

import { Page, OutputArea, Aside, AsideHeader, AsideHeaderIcons, AsideContent } from './styles';
import { Slider, Copy } from '@src/components/icons';

export const Editor = () => {
  const [drawerOpen, setDrawerState] = useState<boolean>(false);
  return (
    <Page>
      <OutputArea>out</OutputArea>
      <Aside open={drawerOpen}>
        <AsideHeader>
          <img src={Logo} className='logo' />
          <AsideHeaderIcons>
            <Copy />
            <Slider onClick={() => setDrawerState((open) => !open)} />
          </AsideHeaderIcons>
        </AsideHeader>
        <AsideContent>Other Stuff</AsideContent>
      </Aside>
    </Page>
  );
};
