import React, { useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import EpisodesTable from './EpisodesTable'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import {
  Paper,
  Divider,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core/'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  actions,
  useCharacterDetailReduxInjector,
  characterDetailSelector,
} from './redux'
import { useCharacterReduxInjector } from 'pages/CharacterListPage/redux'
import history from 'utils/history'

import styles from './CharacterPage.module.scss'

/**
 *  Returns character and episodes
 *  if redirected from from list page, it loads from store
 *  if directly accessed via URL; load action is triggered
 */
const useSelectCharacter = () => {
  useCharacterReduxInjector()
  useCharacterDetailReduxInjector()
  const { character, loading, episodes, episodesLoading } = useSelector(
    characterDetailSelector
  )
  const dispatch = useDispatch()

  const {
    params: { id },
  } = useRouteMatch()

  useEffect(() => {
    const { loadCharacter, loadEpisodes } = actions
    if (!character.id) {
      dispatch(loadCharacter({ id }))
    } else {
      dispatch(loadEpisodes({ episodeUrls: character.episode }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [])

  return [character, loading, episodes, episodesLoading]
}

const useSelectPreviousRoute = () => {
  const routes = useSelector(state => state.routerLocations)
  return routes.length > 1 && routes.slice(-2)[0]
}

const CharacterPage = () => {
  const [
    character,
    characterLoading,
    episodes,
    episodesLoading,
  ] = useSelectCharacter()

  const previousRoute = useSelectPreviousRoute()

  const goBack = useCallback(() => {
    const pathname = previousRoute?.location?.pathname
    const isPreviousHomePage =
      pathname === '/characters/' || pathname === '/characters'

    if (isPreviousHomePage) {
      history.goBack()
    } else {
      history.push('/characters')
    }
  }, [previousRoute])

  return (
    <div>
      <Helmet>
        <title>{character?.name}</title>
      </Helmet>
      <div className={styles.page_container}>
        <div className={styles.detail_card_container}>
          <Paper className={styles.detail_card}>
            <Button
              onClick={goBack}
              className={styles.back_button}
              startIcon={<ArrowBackIcon />}
            >
              Characters Page
            </Button>
          </Paper>
          <Paper className={styles.detail_card}>
            {characterLoading && <LinearProgress></LinearProgress>}
            <Typography className={styles.detail_item}>
              <span className={styles.detail_item_key}>Name</span>
              <span className={styles.detail_item_value}>
                {character?.name}
              </span>
            </Typography>
            <Divider />
            <Typography className={styles.detail_item}>
              <span className={styles.detail_item_key}>Status</span>
              <span className={styles.detail_item_value}>
                {character?.status}
              </span>
            </Typography>
            <Divider />
            <Typography className={styles.detail_item}>
              <span className={styles.detail_item_key}>Origin</span>
              <span className={styles.detail_item_value}>
                {character?.origin?.name}
              </span>
            </Typography>
            <Divider />
          </Paper>
          <img alt="Character" src={character?.image} />
        </div>
        <div>
          <EpisodesTable
            className={styles.table}
            episodes={episodes}
            loading={episodesLoading || characterLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterPage
