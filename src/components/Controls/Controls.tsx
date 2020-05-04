import React from 'react';

import { Aside, ControlPanel, Footer } from './styles';

import ElementControls from './ElementControls';
import ColorControls from './ColorControls';
import ShadowControls from './ShadowControls';

import Logo from '@assets/logo-light-medium-400x70.png';

const Controls = () => {
  return (
    <Aside>
      <ControlPanel>
        <ElementControls />
        <ColorControls />
        <ShadowControls />
      </ControlPanel>
      <Footer>
        <a href='/' title='boxshadows.com'>
          <img src={Logo} width='200' />
        </a>
      </Footer>
    </Aside>
  );
}

export default Controls;
