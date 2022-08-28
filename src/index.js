import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducers from './reducers';
import { Worker } from '@react-pdf-viewer/core';

const store = createStore(reducers, 
  composeWithDevTools(
    applyMiddleware(thunk)
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Worker>
  </React.StrictMode>
);
