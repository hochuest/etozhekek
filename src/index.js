import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {add, multiply} from './math';
//import { t } from 'three';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();



let num1 = 5, num2 = 10;

alert('Add: '+ add(num1, num2));
console.log('Multiply: ', multiply(num1, num2));