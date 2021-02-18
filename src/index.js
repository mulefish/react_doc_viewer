import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);