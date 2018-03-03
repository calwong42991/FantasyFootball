import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import mockPlayer from './mockData';
import options from './option';

ReactDom.render(
  <App mockData={mockPlayer} option={options} />, document.getElementById('app')
);