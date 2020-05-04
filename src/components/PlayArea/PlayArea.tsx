import React, { useContext } from 'react';

import { StoreContext } from '@contexts/Store';
import { PlayAreaContainer, Preview } from './styles';

const PlayArea = () => {
  const { state } = useContext(StoreContext);

  const shadow = state.shadows.map(shadow => `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${shadow.inset ? 'inset' : ''}`).join(', ');

  return (
    <PlayAreaContainer backgroundColor={state.playArea.backgroundColor}>
      <Preview
        shadow={shadow}
        height={state.element.height}
        width={state.element.width}
        backgroundColor={state.element.backgroundColor}
        borderColor={state.element.borderColor}
        borderRadius={state.element.borderRadius}
        borderThickness={state.element.borderThickness}
      />
    </PlayAreaContainer>
  );
}

export default PlayArea;
