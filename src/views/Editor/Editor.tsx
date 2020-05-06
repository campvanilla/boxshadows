import React, { useState, useContext } from 'react';

import { StoreContext } from '@contexts/Store';
import { SnackbarContext } from '@contexts/Snackbar';

// components
import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';
import Button from '@components/Button';
import { Slider, Copy } from '@components/icons';
import { FullHeightPage, ContentArea, Aside } from '@src/components/Page';

import { copyToClipboard } from '@utils/clipboard';

// local components
import { AsideHeaderIcons } from './styles';

export const Editor: React.FC = () => {
  const { state } = useContext(StoreContext);
  const { state: snackBarState, updateState: updateSnackbar } = useContext(SnackbarContext);

  const shadow = state.shadows
    .map(
      (shadow) =>
        `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color} ${
          shadow.inset ? 'inset' : ''
        }`
    )
    .join(', ');

  const handleCopy = () => {
    copyToClipboard(shadow);
    updateSnackbar(true, '🚀 Copied!');
  }

  return (
    <FullHeightPage>
      <ContentArea>
        <PlayArea />
      </ContentArea>
      <Aside
        headerBefore={() => <Button className='copy-btn' disabled={snackBarState.open} onClick={handleCopy}>
        Copy to clipboard
      </Button>}
      headerAfter={({ toggleAside }) => (
        <AsideHeaderIcons>
        <Copy onClick={handleCopy} />
        <Slider onClick={toggleAside} />
      </AsideHeaderIcons>
      )}
      >
        <Controls />
      </Aside>
    </FullHeightPage>
  );
};
