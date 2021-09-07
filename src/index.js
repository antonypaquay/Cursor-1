import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from './Cursor';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <a href="/" className="hoverable">Hover me</a>
  </React.StrictMode>,
  document.getElementById('root')
);
