import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux';
import App from './components/App';



ReactDOM.render(
  <Provider store = {Store}>
    <App />
  </Provider> , 
document.getElementById('wrapper'));