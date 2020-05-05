import React from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider, keyframes} from 'styled-components';

import StoreProvider from '@contexts/Store';

// styling
import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';

// components
import PlayArea from '@components/PlayArea';
import Controls from '@components/Controls';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const AppWrapper = styled.div`
  animation: ${fadeIn} 0.75s;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

const App = () => {
  return (
    <AppWrapper>
      <ThemeProvider
        theme={Theme}
      >
        <GlobalStyles />
        <StoreProvider>
          <PlayArea />
          <Controls/>
        </StoreProvider>
      </ThemeProvider>
    </AppWrapper>
  )
};

render(<App />, document.getElementById('app'));
