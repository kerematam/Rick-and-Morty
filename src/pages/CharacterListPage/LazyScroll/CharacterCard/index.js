import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardActionArea, Typography } from '@material-ui/core'
import history from 'utils/history'
import {
  actions,
  useCharacterDetailReducerInjector,
} from 'pages/CharacterPage/redux'
import Image from 'components/Image'

import styles from './CharacterCard.module.scss'

const DetailItem = ({ label, value }) => {
  return value ? (
    <Typography className={styles.detail_item}>
      <span className={styles.detail_item_key}>{label}</span>
      <span className={styles.detail_item_value}>{value}</span>
    </Typography>
  ) : null
}

export default function CharacterCard({ character }) {
  useCharacterDetailReducerInjector()
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(actions.setActiveCharacter({ character }))
    history.push(`/characters/${character.id}`)
  }, [dispatch, character])

  const createdDate =
    character?.created && new Date(character.created).toDateString()

  return (
    <Card square className={styles.root}>
      <CardActionArea onClick={handleClick}>
        <Image
          className={styles.media}
          src={character?.image}
          alt={character?.name || ''}
          component="img"
        />
        <div className={styles.content}>
          <Typography className={styles.text} variant="h6" gutterBottom>
            {character?.name}
          </Typography>
          <DetailItem label="Type" value={character?.type} />
          <DetailItem label="Created" value={createdDate} />
          <DetailItem label="Origin" value={character?.origin?.name} />
          <DetailItem label="Status" value={character?.status} />
          <DetailItem label="Species" value={character?.species} />
        </div>
      </CardActionArea>
    </Card>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object,
}
