import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'semantic-ui-css/semantic.min.css'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
} else {
  // production code
  function noop() {}
  const savedFunctions = Object.keys(console).reduce((memo, key) => {
    if (typeof console[key] == "function") {
      //keep a copy just in case we need it
      memo[key] = console[key];
      //de-fang any functions
      console[key] = noop;
    }
    return memo;
  }, {});
  
  function logTest(){
  console.log("Hello?");
  console.info("Hello-o-o-o?");
  console.warn("Can anybody hear me?");
  console.error("I guess there is nobody there...");
  savedFunctions.log("MUAHAHAHA!");
  }

  // logTest();
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

