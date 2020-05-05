import React from 'react';

import { AppWrapper } from '@styles/common';

import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';

const Editor = () => {
  return (
    <AppWrapper>
      <PlayArea />
      <Controls/>
    </AppWrapper>
  );
};

export default Editor;
