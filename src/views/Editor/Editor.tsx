import React from 'react';

import { EditorWrapper } from '@styles/common';

import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';

const Editor = () => {
  return (
    <EditorWrapper>
      <PlayArea />
      <Controls/>
    </EditorWrapper>
  );
};

export default Editor;
