import { actions, reducer, NAMESPACE, initialState } from '../index'

const mock = {
  character: {
    id: 1,
    name: 'Rick Sanchez',
  },
}

describe('Actions', () => {
  const { character } = mock

  test('created correctly', () => {
    const expectedAction = {
      type: `${NAMESPACE}/loadCharacter`,
      payload: { character },
    }
    expect(actions.loadCharacter({ character })).toEqual(expectedAction)
  })
})

describe('Action:', () => {
  test('loadCharacter should update reducer correctly', () => {
    const { loading } = reducer(initialState, actions.loadCharacter())
    expect(loading).toEqual(true)
  })

  test('loadCharacterSucceed should update reducer correctly', () => {
    const stateAfterLoadAction = {
      ...initialState,
      loading: true,
    }
    const expectedState = {
      loading: false,
      character: mock.character,
      error: false,
      episodes: [],
    }
    const newState = reducer(
      stateAfterLoadAction,
      actions.loadCharacterSucceed({ character: mock.character })
    )
    expect(expectedState).toEqual(newState)
  })
})
