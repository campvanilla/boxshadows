import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StoreProvider from '@contexts/Store';
import Editor from '@src/views/Editor';
import Presets from '@src/views/Presets';

// styling
import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';
import Tabs from '@components/Navigation';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <StoreProvider>
        <Router>
          <Tabs />
          <Switch>
            <Route exact path='/' component={Editor} />
            <Route exact path='/presets' component={Presets} />
          </Switch>
        </Router>
      </StoreProvider>
    </ThemeProvider>
  )
};

render(<App />, document.getElementById('app'));
