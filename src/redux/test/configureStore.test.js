import configureStore from '../configureStore'

describe('configureStore', () => {
  test('should return a redux store', () => {
    const store = configureStore({})
    expect(store).toEqual(
      expect.objectContaining({
        dispatch: expect.any(Function),
        subscribe: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
      })
    )
  })
})
