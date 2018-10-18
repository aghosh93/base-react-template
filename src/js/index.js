import React from 'react';
import ReactDOM from 'react-dom';

// const $ = require('jquery');
// const whatInput = require('what-input');
// const Foundation = require('foundation-sites')

require('../scss/main.scss');

const Main = require('./components/Main.react');

ReactDOM.render(
  <Main />,
  document.getElementById('main-content')
);
