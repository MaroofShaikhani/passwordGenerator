import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import PassGen from './PassGen';
// import reportWebVitals from './reportWebVitals';
// import Main from './Main'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  {/* <React.StrictMode> */}
    <PassGen/>
  {/* </React.StrictMode> */}
  {/* <Main/> */}
  </div>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
