import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import options from './components/data/option';

ReactDom.render(
  <App options={options} />, document.getElementById('app')
);