// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'

import App from './App.js'
import { documentReducer, displayLayoutReducer, viewportReducer } from './documents/reducer.js'

const store = createStore(
  combineReducers({
    documentReducer,
    displayLayoutReducer,
    viewportReducer
  })
)

ReactDOM.render(
  <ChakraProvider theme={theme}>

    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
)
