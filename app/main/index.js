require('../layout/styles/layout.scss');

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const run = () => {
  render(<App />, document.getElementById('root'));
};

if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
