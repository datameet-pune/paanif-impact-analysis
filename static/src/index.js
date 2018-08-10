// import './styles/style.css';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import './styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.wrapper')
);

$('#filter-close').on('click', function() {
  $('#slideout_inner').toggleClass('clicked');
  $('#filter-close').toggleClass('filter-hide');
  $('#hamburger').toggleClass('filter-hide');
});

$('#hamburger').on('click', function() {
  $('#slideout_inner').toggleClass('clicked');
  $('#filter-close').toggleClass('filter-hide');
  $('#hamburger').toggleClass('filter-hide');
});
