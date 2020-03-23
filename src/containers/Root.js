import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { HelmetProvider } from 'react-helmet-async'
import history from 'utils/history'
import Routes from './Routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
