import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../CSS/artists.css'
import { Zoom } from 'react-slideshow-image'

const Artist = ({ artist, comics }) => {
  const images = artist.comics.map(comic => comic)

  const renderComics = () => {
    return images.map(comic => {
      return (
        <Link to={`/comics/${comic.id}`}>
          <img key={comic.id} src={comic.image} alt='' />
          <h2>{comic.name}</h2>
        </Link>
      )
    })
  }

  const zoomOutProperties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

  return (
    <div className='artist-card'>
      <h1>{artist.name}</h1>
      <Zoom className='zoom-component' {...zoomOutProperties}>
        {renderComics()}
      </Zoom>
    </div>
  )
}

export default connect(state => ({ comics: state.comics }))(Artist)
