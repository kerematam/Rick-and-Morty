import React, { useCallback } from 'react'
import renderer from 'react-test-renderer'
import CharacterCard from '../index'
import { Provider } from 'react-redux'
import configureStore from 'redux/configureStore'

const character = {
  id: 1,
  name: 'Rick Sanchez',
  type: '',
  image: '',
}

const setup = (setupProps = {}) => {
  const store = configureStore()
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <CharacterCard {...setupProps} />
      </Provider>
    )
    .toJSON()

  return {
    wrapper,
  }
}

describe('CharacterCard', () => {
  test('should render correctly', () => {
    const { wrapper } = setup({ character })
    expect(wrapper).toMatchSnapshot()
  })

  test('should render without crashing with corrupted backend data', () => {
    const { wrapper } = setup({ character: { name: null } })
    expect(wrapper).toMatchSnapshot()
  })
})
