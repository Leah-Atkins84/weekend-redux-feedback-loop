import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



const PageOne  = (state = 0, action) => {
    if (action.type ===  'FEED_BACK_ONE' ){
      return action.payload;
    }
      return state;
  }

const UnderstandingReducer  = (state = 0, action) => {
    if (action.type ===  'PAGE_TWO' ){
      return action.payload;
    }
      return state;
  }

const SupportedReducer  = (state = 0, action) => {
    if (action.type ===  'PAGE_THREE' ){
      return action.payload;
    }
      return state;
  }


const CommentReducer  = (state = '', action) => {
    if (action.type ===  'PAGE_FOUR' ){
      return action.payload;
    }
      return state;
  }



const storeData = createStore(
    combineReducers({
        PageOne,
        UnderstandingReducer,
        SupportedReducer,
        CommentReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

