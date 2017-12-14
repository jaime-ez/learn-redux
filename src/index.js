import React from 'react'
import {render} from 'react-dom'
// css
import './styles/style.css'

import App from './components/App'
import {Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import store, {history} from './store'
import { ConnectedRouter } from 'react-router-redux'

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))
