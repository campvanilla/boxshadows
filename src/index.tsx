import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import StoreProvider from '@contexts/Store';

// utils
import { removeClass } from '@utils/dom';

// styling
import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';

// components
import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';

const App = () => {
  useEffect(() => {
    removeClass(document.body, 'loading');
  }, []);
  return (
    <ThemeProvider
      theme={Theme}
    >
      <GlobalStyles />
      <StoreProvider>
        <PlayArea />
        <Controls/>
      </StoreProvider>
    </ThemeProvider>
  )
};

render(<App />, document.getElementById('app'));
