import { call, put, select, takeEvery } from 'redux-saga/effects'
import { actions, characterSelector } from './'
import { api } from 'utils/api'

export function* loadCharacters() {
  const { characters: selectedCharacters, page } = yield select(
    characterSelector
  )
  try {
    const {
      info: { next },
      results,
    } = yield call(api.getCharacters, { page })
    const characters = [...selectedCharacters, ...results]
    yield put(
      actions.loadCharactersSucceed({
        characters,
        page: page + 1,
        hasMore: !!next,
      })
    )
  } catch (err) {
    yield put(actions.loadCharactersFailed())
  }
}

export default function* charactersData() {
  yield takeEvery(actions.loadCharacters.type, loadCharacters)
}
