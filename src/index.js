// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App.js'
import { documentReducer } from './documents/reducer.js'

const store = createStore(
  combineReducers({
    documentReducer
  })
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
