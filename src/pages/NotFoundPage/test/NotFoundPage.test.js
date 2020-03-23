import React from 'react'
import renderer from 'react-test-renderer'
import NotFoundPage from '../index'

const setup = () => {
  const wrapper = renderer.create(<NotFoundPage />).toJSON()

  return {
    wrapper,
  }
}

describe('NatfoundPage', () => {
  test('should render correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
