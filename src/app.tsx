import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => (<p>Hello World</p>);

let app = App;

if (__DEV__) {
  app = hot(module)(App);
}

export default app;
