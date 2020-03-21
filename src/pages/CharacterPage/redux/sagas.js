import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions } from './index'
import { api } from 'utils/api'

export function* loadEpisodes({ payload }) {
  try {
    const lastFiveEpisodes = payload.episodeUrls.slice(-5)
    const episodeCalls = lastFiveEpisodes.map(url =>
      call(api.getEpisodeByUrl, url)
    )
    const data = yield all(episodeCalls)
    yield put(actions.loadEpisodesSucceed({ data }))
  } catch (err) {
    yield put(actions.loadEpisodesFailed())
  }
}

export function* loadCharacter({ payload }) {
  try {
    const character = yield call(api.getCharacterById, payload.id)
    yield put(actions.loadCharacterSucceed({ character }))
    const { episode: episodeUrls } = character
    yield put(actions.loadEpisodes({ episodeUrls }))
  } catch (err) {
    yield put(actions.loadCharacterFailed())
  }
}

export default function* charactersData() {
  yield takeLatest(actions.loadCharacter.type, loadCharacter)
  yield takeLatest(actions.loadEpisodes.type, loadEpisodes)
}
