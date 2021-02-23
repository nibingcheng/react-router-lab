import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom"

import App from './App';
import './index.css';
import Parks from './data/parks.json';

ReactDOM.render(
  <Router>
    <App parks={Parks}/>
    
  </Router>,
  document.getElementById('root')
);
