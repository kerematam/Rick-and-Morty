import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import BasicLayout from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

const setup = (path = '/') => {
  const store = configureStore()
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <HelmetProvider>
            <BasicLayout />
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    )
    .toJSON()

  return {
    wrapper,
  }
}

describe('BasicLayout', () => {
  test('correctly handles "/" route', () => {
    const { wrapper } = setup('/')
    expect(wrapper).toMatchSnapshot()
  })

  test('correctly handles "/characters/1" route', () => {
    const { wrapper } = setup('/characters/1')
    expect(wrapper).toMatchSnapshot()
  })
})
