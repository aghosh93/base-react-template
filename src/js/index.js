/* eslint-disable  react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

const Main = require('./components/Main.react');

ReactDOM.render(
  <Main />,
  document.getElementById('main-content'),
);

if (module.hot) {
  module.hot.accept();
}
