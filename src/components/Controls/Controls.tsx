import React, { useContext, useState } from 'react';

import { StoreContext } from '@contexts/Store';
import Button from '@components/Button';
import { copyToClipboard } from '@utils/clipboard';

import { Aside, ControlPanel, Footer } from './styles';

import ElementControls from './ElementControls';
import ColorControls from './ColorControls';
import ShadowControls from './ShadowControls';

import Logo from '@assets/logo-light-medium-400x70.png';

const Controls = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useContext(StoreContext);

  const shadow = state.shadows.map(shadow => `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${shadow.inset ? 'inset' : ''}`).join(', ');

  return (
    <Aside>
      <ControlPanel>
        <ElementControls />
        <ColorControls />
        <ShadowControls />
      </ControlPanel>
      <Footer>
        <Button disabled={loading} onClick={copyToClipboard.bind(null, shadow, setLoading)}>{loading ? 'Copied!' : 'Copy to clipboard'}</Button>
        <a href='/' title='boxshadows.com'>
          <img src={Logo} width='200' />
        </a>
      </Footer>
    </Aside>
  );
}

export default Controls;
