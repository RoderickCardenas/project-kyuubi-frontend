import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Comic = ({ comic, artists }) => {
  return (
    <div className='comic-card'>
      <Link to={`/comics/${comic.id}`}>
        <img src={comic.image} alt='' />
      </Link>
      <h1>{comic.name}</h1>
      <h2>{comic.artist}</h2>
      <h2>{comic.date_added}</h2>
    </div>
  )
}

export default connect(state => ({ artists: state.artists }))(Comic)
