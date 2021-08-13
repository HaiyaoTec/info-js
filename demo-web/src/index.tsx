import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@imf/info-js'
console.log(window.browserInfo)
console.log(window.browserInfo.appVersion)
console.log(window.browserInfo.platform)
console.log(window.browserInfo.screenResolution)
console.log(window.browserInfo.client)
console.log(window.browserExtension.language)
console.log(window.browserInfo.isMobileDevice)
console.log(window.browserInfo.userAgent)
window.browserExtension.language='zh-cn'





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
