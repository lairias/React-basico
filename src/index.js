import React from 'react';//importamos react
import ReactDOM from 'react-dom';//servidor de App 
import './index.css'; //importaciones de ccs
import App from './App'; //importaaciones de nuestro codigo central
import * as serviceWorker from './serviceWorker'; //importaciones del server

ReactDOM.render(
  //renderezamos una vista dento del id root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
