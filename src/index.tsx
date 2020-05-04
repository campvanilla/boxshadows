import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import StoreProvider from '@contexts/Store';
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
      <StoreProvider>
        <PlayArea />
        <Controls/>
      </StoreProvider>
    </ThemeProvider>
  </>
);

render(<App />, document.getElementById('app'));
