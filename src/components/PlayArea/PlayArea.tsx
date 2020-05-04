import React, { useContext } from 'react';

import { StoreContext } from '@contexts/Store';
import { PlayAreaContainer, Preview } from './styles';

const PlayArea = () => {
  const { state } = useContext(StoreContext);

  return (
    <PlayAreaContainer>
      <Preview
        shadows={state.shadows}
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
