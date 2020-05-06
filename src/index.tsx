import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StoreProvider from '@contexts/Store';
import SnackbarProvider from '@contexts/Snackbar';
import Navigation from '@components/Navigation';
import Snackbar from '@components/Snackbar';
import About from '@components/About';

// routes or views
import Presets from '@src/views/Presets';
import Editor from '@src/views/Editor';

// styling
import GlobalStyles from '@styles/globalStyles';
import { Theme } from '@styles/theme';

// utils
import { setWindowCustomProperties } from '@utils/dom';

const App = () => {
  useEffect(() => {
    return setWindowCustomProperties();
  });

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SnackbarProvider>
        <StoreProvider>
          <Snackbar />
          <Router>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Editor} />
              <Route exact path='/presets' component={Presets} />
            </Switch>
          </Router>
          <About />
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('app'));
