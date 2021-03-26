import {BrowserRouter as Router  } from "react-router-dom";
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './App';
import rootReducer from "./store/rootReducer";


import { watchLoadHotels } from "./saga/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadHotels);
ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} >
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
