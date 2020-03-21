import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import { actions, useCharacterReduxInjector, characterSelector } from './redux'
import LazyScroll from './LazyScroll'
import styles from './CharacterListPage.module.scss'

export default React.memo(function CharacterListPage() {
  useCharacterReduxInjector()
  const dispatch = useDispatch()
  const { loading, error, characters, hasMore } = useSelector(characterSelector)
  const loadMore = useCallback(() => {
    if (!loading && !error && hasMore) {
      dispatch(actions.loadCharacters())
    }
  }, [loading, error, hasMore, dispatch])

  return (
    <div className={styles.root}>
      <Helmet>
        <title>Rick and Morty</title>
      </Helmet>
      {error && (
        <Button onClick={loadMore}>
          Could not fetch data; Try to reload again.
        </Button>
      )}
      <LazyScroll hasMore loading characters={characters} loadMore={loadMore} />
    </div>
  )
})
