import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { createSlice } from '@reduxjs/toolkit'
import saga from './sagas'

export const NAMESPACE = 'CharacterListPage'

export const initialState = {
  loading: false,
  page: 1,
  hasMore: true,
  characters: [],
  error: false,
}

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    loadCharacters: state => {
      state.loading = true
    },
    loadCharactersSucceed: (state, action) => {
      state.characters = action.payload.characters
      state.page = action.payload.page
      state.hasMore = action.payload.hasMore
      state.loading = false
      state.error = false
    },
    loadCharactersFailed: (state, action) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { reducer, actions } = slice

//  Injectors
export const useCharacterReducerInjector = () =>
  useInjectReducer({ key: NAMESPACE, reducer })
export const useCharacterSagaInjector = () =>
  useInjectSaga({ key: NAMESPACE, saga })
export const useCharacterReduxInjector = () => {
  useCharacterReducerInjector()
  useCharacterSagaInjector()
}

// Selectors
export const characterSelector = state => state[NAMESPACE]
