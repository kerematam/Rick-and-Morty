import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import rootSaga from './redux/rootSagas'
import history from 'utils/history'
import { StylesProvider } from '@material-ui/core/styles'
import 'typeface-roboto'

const initialState = {}
const store = configureStore(initialState, history)
store.runSaga(rootSaga)

render(
  <Router>
    <StylesProvider injectFirst>
      <Root store={store} />
    </StylesProvider>
  </Router>,
  document.getElementById('root')
)
