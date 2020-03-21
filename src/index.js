import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.getElementById('app')
);