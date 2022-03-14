import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import MovieReducers from '../reducers/MovieReducers'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  return createStore(
    combineReducers({
      MovieState: MovieReducers,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )
}
