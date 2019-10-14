import React, { useEffect } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import '../CSS/buttons.css'
import * as actions from '../actions'

const ComicPreview = ({
  artists,
  comics,
  id,
  currentUser,
  incrementVote,
  getVotes
}) => {
  const comic = comics.find(comic => comic.id === parseInt(id))
  const artist = artists.find(artist => artist.id === comic.artist_id)

  const handleIncrement = () => {
    if (currentUser) {
      incrementVote(currentUser.id, id)
    } else {
    }
  }

  useEffect(() => {
    if (currentUser) {
      getVotes()
    }
  })

  return (
    <div>
      <Nav />
      {comic ? (
        <div className='comic-preview-container'>
          <h1>{comic.name}</h1>
          <h2>{artist.name}</h2>
          <img src={comic.image} alt='' />
          <h2>Current Votes: </h2>
          <h2>0</h2>
          <button className='counterUp-btn'>+</button>
        </div>
      ) : (
        <h1>Error loading</h1>
      )}
    </div>
  )
}

export default connect(
  state => ({
    currentUser: state.currentUser,
    comics: state.comics,
    artists: state.artists
  }),
  actions
)(ComicPreview)
