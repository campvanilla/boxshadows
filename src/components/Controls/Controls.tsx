import React from 'react';


import { ControlsWrapper } from '@components/Controls/styles';
import ElementControls from '@components/Controls/ElementControls';
import ColorControls from '@components/Controls/ColorControls';
import ShadowControls from '@components/Controls/ShadowControls';

const Controls: React.FC = () => {
  return (
    <ControlsWrapper>
      <ElementControls />
      <ColorControls />
      <ShadowControls />
    </ControlsWrapper>
  );
};

export default Controls;
