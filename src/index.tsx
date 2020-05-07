import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StoreProvider from '@contexts/Store';
import SnackbarProvider from '@contexts/Snackbar';
import Navigation from '@components/Navigation';
import Snackbar from '@components/Snackbar';
import Dialog from '@components/Dialog';
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
  const [dialogOpenState, setDialogOpenState] = useState(false);

  useEffect(setWindowCustomProperties);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SnackbarProvider>
        <StoreProvider>
          <Router>
            <Navigation
              triggers={{
                about: () => setDialogOpenState(true),
              }}
            />
            <Switch>
              <Route exact path='/' component={Editor} />
              <Route exact path='/presets' component={Presets} />
            </Switch>
          </Router>
          <Snackbar />
          <Dialog open={dialogOpenState} onClose={() => setDialogOpenState(false)}>
            <About />
          </Dialog>
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('app'));
