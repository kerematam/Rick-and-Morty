import React from 'react'

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

// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'
// import LinearProgress from '@material-ui/core/LinearProgress'

import styles from './EpisodesTable.module.scss'

export default function EpisodesTable({ episodes, loading }) {
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
}
