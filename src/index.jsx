import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../public/client/store';
import App from '../public/client/Components/App.tsx';

// uncomment so that webpack can bundle styles
import '../public/client/scss/application.scss';

render(
  <Provider store={store}>
    <App />
    <store />
  </Provider>,
  document.getElementById('root')
);
