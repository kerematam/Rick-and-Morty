import React from 'react'
import renderer from 'react-test-renderer'
import LazyScroll from '../index'

const setup = setupProps => {
  const wrapper = renderer.create(<LazyScroll {...setupProps} />).toJSON()

  return {
    wrapper,
  }
}

describe('LazyScroll', () => {
  test('should render correctly', () => {
    const setupProps = {
      characters: [],
      loadMore: () => {},
      loading: false,
      hasMore: true,
    }
    const { wrapper } = setup(setupProps)
    expect(wrapper).toMatchSnapshot()
  })
})
