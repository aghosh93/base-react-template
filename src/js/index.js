import React from 'react';
import ReactDOM from 'react-dom';

// const $ = require('jquery');
// const whatInput = require('what-input');
// const Foundation = require('foundation-sites')

const Main = require('./components/Main.react');

ReactDOM.render(
  <Main />,
  document.getElementById('main-content'),
);

if (module.hot) {
  module.hot.accept();
}
