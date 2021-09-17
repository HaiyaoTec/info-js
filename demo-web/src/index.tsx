import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CountryInfo} from '@imf/info-js'
import {CountryEnum} from "@imf/info-js/dist/country/enum/CountryEnum";

console.log(window.browserInfo)
console.log(window.browserInfo.appVersion)
console.log(window.browserInfo.platform)
console.log(window.browserInfo.screenResolution)
console.log(window.browserInfo.hasClient)
console.log(window.browserExtension.language)
console.log(window.browserInfo.isMobileDevice)
console.log(window.browserInfo.userAgent)
window.browserExtension.language='zh-cn'
const countryInfo = new CountryInfo();
console.log(countryInfo.getCountryInfoBySimple(CountryEnum.ID))



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
