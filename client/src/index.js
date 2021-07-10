import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CartProvider from './context/CartProvider/CartProvider';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

// client.query({
//   query: gql`
//     {
//       collections {
//         id 
//         title
//         items {
//           id
//           price
//         }
//       }
//     }
//   `
// }).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartProvider>
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <PersistGate persistor={persistor} >
              <App />
            </PersistGate>
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
    </CartProvider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
