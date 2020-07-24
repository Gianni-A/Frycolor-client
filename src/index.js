import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.getElementById('app')
);