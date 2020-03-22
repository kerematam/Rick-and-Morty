import { actions, reducer, NAMESPACE, initialState } from '../index'

const mock = {
  characters: [
    {
      id: 1,
      name: 'Rick Sanchez',
    },
  ],
}

describe('Actions', () => {
  const { characters } = mock

  test('created correctly', () => {
    const expectedAction = {
      type: `${NAMESPACE}/loadCharacters`,
      payload: { characters },
    }
    expect(actions.loadCharacters({ characters })).toEqual(expectedAction)
  })
})

describe('Action', () => {
  test('loadCharacters should update reducer correctly', () => {
    const { loading } = reducer(initialState, actions.loadCharacters())
    expect(loading).toEqual(true)
  })

  test('loadCharactersSucceed should update reducer correctly', () => {
    const stateAfterLoadAction = {
      ...initialState,
      loading: true,
    }
    const expectedState = {
      loading: false,
      page: 1,
      hasMore: true,
      characters: mock.characters,
      error: false,
    }
    const newState = reducer(
      stateAfterLoadAction,
      actions.loadCharactersSucceed({
        characters: mock.characters,
        hasMore: true,
        page: 1,
      })
    )
    expect(newState).toEqual(expectedState)
  })
})
