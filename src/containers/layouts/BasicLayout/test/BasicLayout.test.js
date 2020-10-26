import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import BasicLayout from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

const setup = async (path = '/') => {
  let wrapper

  await renderer.act(async () => {
    const store = configureStore()

    wrapper = await renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <HelmetProvider>
            <BasicLayout />
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    )
  })

  return {
    wrapper,
  }
}

describe('BasicLayout', () => {
  test('correctly handles "/" route', async () => {
    const { wrapper } = await setup('/')
    expect(wrapper).toMatchSnapshot()
  })

  test('correctly handles "/characters/1" route', async () => {
    const { wrapper } = await setup('/characters/1')
    expect(wrapper).toMatchSnapshot()
  })
})
