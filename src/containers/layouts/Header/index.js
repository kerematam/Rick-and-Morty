import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Button } from '@material-ui/core/'
import {
  DoubleArrow as DoubleArrowIcon,
  PermIdentity as PermIdentityIcon,
  Home as HomeIcon,
} from '@material-ui/icons'
import history from 'utils/history'
import {
  characterDetailSelector,
  useCharacterDetailReduxInjector,
} from 'pages/CharacterPage/redux'

import styles from './Header.module.scss'

function handleClickHomepage() {
  history.replace('/characters')
}

export default function LayoutHeader() {
  useCharacterDetailReduxInjector()
  const pathname = useSelector(state => state.router.location.pathname)
  const { character } = useSelector(characterDetailSelector)
  const isCharacterDetailPage = !(
    pathname === '/characters' || pathname === '/characters/'
  )

  return (
    <div className={styles.root}>
      <span className={styles.menu_item}>
        <Button
          onClick={handleClickHomepage}
          className={styles.menu_item_button}
        >
          <HomeIcon className={styles.menu_item_icon} fontSize="small" />
          <Typography className={styles.menu_item_text}>Characters</Typography>
        </Button>
      </span>
      {isCharacterDetailPage && (
        <>
          <span className={styles.menu_item_delimiter}>
            <DoubleArrowIcon />
          </span>
          <span className={styles.menu_item}>
            <Button className={styles.menu_iten_button}>
              <PermIdentityIcon
                className={styles.menu_item_icon}
                fontSize="small"
              />
              <Typography className={styles.menu_item_text}>
                {character.name}
              </Typography>
            </Button>
          </span>
        </>
      )}
    </div>
  )
}
