import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../public/client/store';
import App from '../public/client/Components/App.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

// uncomment so that webpack can bundle styles
import '../public/client/scss/application.scss';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
      <store />
    </Provider>
    ,
  </ApolloProvider>,
  document.getElementById('root')
);
