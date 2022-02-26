import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import { Provider } from react-redux;
//import {applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
