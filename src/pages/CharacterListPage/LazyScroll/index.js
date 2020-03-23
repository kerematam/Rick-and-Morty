import React from 'react'
import Grid from '@material-ui/core/Grid'
import InfiniteScroll from 'react-infinite-scroller'
import Card from './CharacterCard'

const LazyScroll = ({ characters = [], loadMore, loading, hasMore }) => {
  return (
    <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={true}>
      <Grid container spacing={3}>
        {characters.map(character => (
          <Grid key={character.id} item xs={12} sm={6} md={3}>
            <Card character={character} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default React.memo(LazyScroll)
