import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import history from 'utils/history'
import {
  actions,
  useCharacterDetailReducerInjector,
} from 'pages/CharacterPage/redux'

import styles from './CharacterCard.module.scss'

export default function CharacterCard({ character }) {
  useCharacterDetailReducerInjector()
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(actions.setActiveCharacter({ character }))
    history.push(`/characters/${character.id}`)
  }, [dispatch, character])

  return (
    <Card square className={styles.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={styles.media}
          image={character?.image}
          title={character?.name}
          component="img"
        />
        <CardContent className={styles.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {character?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character?.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object,
}
