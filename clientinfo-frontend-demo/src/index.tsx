import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@imf/ClientInfo'
console.log(window.clientInfo.appVersion)
console.log(window.clientInfo.platform)
console.log(window.clientInfo.language)
console.log(window.clientInfo.screenResolution)
console.log(window.clientInfo.isMobileDevice)



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
