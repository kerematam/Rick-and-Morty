import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from '@material-ui/core'

import styles from './EpisodesTable.module.scss'

const EpisodesTable = React.memo(({ episodes, loading }) => {
  return (
    <TableContainer component={Paper}>
      {loading && <LinearProgress></LinearProgress>}
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Air Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map(({ id, episode, name, air_date, url }) => (
            <TableRow hover key={id}>
              <TableCell component="th" scope="row">
                {episode}
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{air_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

EpisodesTable.propTypes = {
  episodes: PropTypes.array,
  loading: PropTypes.bool,
}

export default EpisodesTable
