import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './rootReducers'
import { routerMiddleware } from 'connected-react-router'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'

function configureStore(initialState = {}, history) {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ]

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  )

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      forceReducerReload(store)
    })
  }

  return store
}

export default configureStore
