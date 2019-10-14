import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Comic = ({ comic, artists }) => {
  const artist = artists.find(artist => artist.id === comic.artist_id)
  //   let artistName
  //   if (artist) {
  //     artistName = artist.name
  //   } else if (artists.length > 0) {
  //     artistName = 'No match found'
  //   } else {
  //     artistName = 'Loading...'
  //   }

  const artistName = artist
    ? artist.name
    : artists.length === 0
      ? 'Loading...'
      : 'Not found'

  return (
    <div className='comic-card'>
      <Link to={`/comics/${comic.id}`}>
        <img src={comic.image} alt='' />
      </Link>
      <h1>{comic.name}</h1>
      <h2>{artistName}</h2>
      <h2>{comic.date_added}</h2>
    </div>
  )
}

export default connect(state => ({ artists: state.artists }))(Comic)
