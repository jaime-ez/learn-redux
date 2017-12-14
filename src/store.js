import { createStore, applyMiddleware, compose } from 'redux'

import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers/index' // Or wherever you keep your reducers

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(middleware)))

export {history}
export default store
