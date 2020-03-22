import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import CharacterListPage from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'
import { HelmetProvider } from 'react-helmet-async'

const setup = () => {
  const store = configureStore()
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <HelmetProvider>
          <CharacterListPage />
        </HelmetProvider>
      </Provider>
    )
    .toJSON()

  return {
    wrapper,
  }
}

describe('CharacterListPage', () => {
  test('should render correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
