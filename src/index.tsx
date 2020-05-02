import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';

import TextInput from '@components/TextInput';

const App = () => (
  <>
    <ThemeProvider
      theme={Theme}
    >
      <GlobalStyles />
      <TextInput placeholder='Name' append='x' />
      <p>Hello World!</p>
    </ThemeProvider>
  </>
);

render(<App />, document.getElementById('app'));
