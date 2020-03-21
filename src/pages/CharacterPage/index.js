import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import EpisodesTable from './EpisodesTable'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import {
  Grid,
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
 * Returns character and episodes
 *  if redirected from from list page, it loads from store
 *  if directly accessed via URL; load action is triggered
 */
const useGetCharacter = () => {
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

const goBack = () => {
  history.goBack()
}

const CharacterPage = () => {
  const [
    character,
    characterLoading,
    episodes,
    episodesLoading,
  ] = useGetCharacter()

  return (
    <div>
      <Helmet>
        <title>Rick and Morty / {`${character?.name}`}</title>
      </Helmet>
      <Grid container alignItems="flex-start" flexShrink="0">
        <Grid item xs={3}>
          <Grid container className={styles.page_left_column}>
            <Grid item>
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
            </Grid>
            <Grid className={styles.background_blue}>
              <Paper>
                <img
                  className={styles.img_detail}
                  alt="Character"
                  src={character?.image}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.background_red} xs={9}>
          <EpisodesTable
            episodes={episodes}
            loading={episodesLoading || characterLoading}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  )
}

export default CharacterPage
