import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import saga from './sagas'
import { createSlice } from '@reduxjs/toolkit'

export const NAMESPACE = 'CharacterDetailPage'

export const initialState = {
  loading: false,
  character: {},
  episodes: [],
}

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    loadCharacter: state => {
      state.loading = true
    },
    loadCharacterSucceed: (state, action) => {
      state.character = action.payload.character
      state.loading = false
      state.error = false
    },
    setActiveCharacter: (state, action) => {
      state.character = action.payload.character
      state.loading = false
      state.error = false
      state.episodes = []
    },
    loadCharacterFailed: (state, action) => {
      state.loading = false
      state.error = true
    },
    loadEpisodes: state => {
      state.episodesLoading = true
    },
    loadEpisodesSucceed: (state, action) => {
      state.episodesLoading = false
      state.episodes = action.payload.data
    },
    loadEpisodesFailed: state => {
      state.episodesLoading = false
    },
  },
})

export const { reducer, actions } = slice

// Injectors
export const useCharacterDetailReducerInjector = () =>
  useInjectReducer({ key: NAMESPACE, reducer })
export const useCharacterDetailSagaInjector = () =>
  useInjectSaga({ key: NAMESPACE, saga })
export const useCharacterDetailReduxInjector = () => {
  useCharacterDetailReducerInjector()
  useCharacterDetailSagaInjector()
}

// Selectors
export const characterDetailSelector = state => state[NAMESPACE]
