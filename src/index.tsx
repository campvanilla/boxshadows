import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';
import PlayArea from './components/PlayArea';
import Controls from './components/Controls';

const App = () => (
  <>
    <ThemeProvider
      theme={Theme}
    >
      <GlobalStyles />
      <PlayArea />
      <Controls/>
    </ThemeProvider>
  </>
);

render(<App />, document.getElementById('app'));
