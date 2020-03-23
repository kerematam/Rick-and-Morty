import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import history from 'utils/history'

export function routerLocations(state = [], action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    routerLocations,
    ...injectedReducers,
  })

  return rootReducer
}
