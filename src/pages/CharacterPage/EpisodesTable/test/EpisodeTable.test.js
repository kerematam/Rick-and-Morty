import React from 'react'
import renderer from 'react-test-renderer'
import EpisodesTable from '../index'

const setup = setupProps => {
  const wrapper = renderer.create(<EpisodesTable {...setupProps} />).toJSON()

  return {
    wrapper,
  }
}

describe('EpisodesTable', () => {
  test('should render correctly', () => {
    const mockProps = { episodes: [], loading: false }
    const { wrapper } = setup(mockProps)
    expect(wrapper).toMatchSnapshot()
  })
})
