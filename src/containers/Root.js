import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { HelmetProvider } from 'react-helmet-async'
import history from 'utils/history'
import BasicLayout from './layouts/BasicLayout'

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <BasicLayout />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
