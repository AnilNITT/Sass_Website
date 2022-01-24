import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css"

ReactDOM.render(
  <Router basename="/Sass_Website">
    <App />
  </Router>,
  document.getElementById('root')
);
