import React, { useState, useContext } from 'react';

import { StoreContext } from '@contexts/Store';
import { SnackbarContext } from '@contexts/Snackbar';

// components
import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';
import Button from '@components/Button';
import { Slider, Copy } from '@components/icons';
import { Logo } from '@src/components/Logo';

import { copyToClipboard } from '@utils/clipboard';

// local components
import { Page, OutputArea, Aside, AsideHeader, AsideHeaderIcons, AsideContent } from './styles';

export const Editor: React.FC = () => {
  const [drawerOpen, setDrawerState] = useState<boolean>(false);

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
    <Page>
      <OutputArea>
        <PlayArea />
      </OutputArea>
      <Aside open={drawerOpen}>
        <AsideHeader>
          <Button className='copy-btn' disabled={snackBarState.open} onClick={handleCopy}>
            Copy to clipboard
          </Button>
          <Logo />
          <AsideHeaderIcons>
            <Copy onClick={handleCopy} />
            <Slider onClick={() => setDrawerState((open) => !open)} />
          </AsideHeaderIcons>
        </AsideHeader>
        <AsideContent>
          <Controls />
        </AsideContent>
      </Aside>
    </Page>
  );
};
