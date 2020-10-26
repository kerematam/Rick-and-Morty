import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import CharacterPage from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'
import { HelmetProvider } from 'react-helmet-async'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

const setup = () => {
  const store = configureStore()
  const history = createMemoryHistory()

  const wrapper = renderer
    .create(
      <Provider store={store}>
        <Router history={history}>
          <HelmetProvider>
            <CharacterPage />
          </HelmetProvider>
        </Router>
      </Provider>
    )
    .toJSON()

  return {
    wrapper,
  }
}

describe('CharacterPage', () => {
  test('should render correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
