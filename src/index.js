import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
