import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

const ComicPreview = ({ artists, comics, id }) => {
  const comic = comics.find(comic => comic.id === parseInt(id))
  const artist = artists.find(artist => artist.id === comic.artist_id)
  return (
    <div>
      <Nav />
      {comic ? (
        <>
          <h1>{comic.name}</h1>
          <h2>{artist.name}</h2>
          <img src={comic.image} alt='' />
          <h2>Current Votes:</h2>
        </>
      ) : (
        <h1>Error loading</h1>
      )}
    </div>
  )
}

export default connect(state => ({
  comics: state.comics,
  artists: state.artists
}))(ComicPreview)
