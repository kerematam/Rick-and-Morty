import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import Header from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'

const setup = (setupProps = {}) => {
  const store = configureStore()
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <Header {...setupProps} />
      </Provider>
    )
    .toJSON()

  return {
    wrapper,
  }
}

describe('Header', () => {
  test('should render correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
