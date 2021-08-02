import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ClientInfoInstanceFactory} from '@imf/ClientInfo'
console.log(ClientInfoInstanceFactory.getInstance().appVersion)
console.log(ClientInfoInstanceFactory.getInstance().platform)
console.log(ClientInfoInstanceFactory.getInstance().language)
console.log(ClientInfoInstanceFactory.getInstance().screenResolution)
console.log(ClientInfoInstanceFactory.getInstance().isMobileDevice)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
