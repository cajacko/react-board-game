import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from '~/store/configureStore' 
import {syncHistoryWithStore} from 'react-router-redux'
import App from '~/containers/App/App'

const store = configureStore()
window.store = store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('app')
)
