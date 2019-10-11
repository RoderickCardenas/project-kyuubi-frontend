import React from 'react'
import { connect } from 'react-redux'

const Artist = ({ artist, comics }) => {
  return (
    <div className='artist-card'>
      <h1>{artist.name}</h1>
    </div>
  )
}

export default connect(state => ({ comics: state.comics }))(Artist)
