import React from 'react'
import { connect } from 'react-redux'
import '../CSS/artists.css'
import { Zoom } from 'react-slideshow-image'

const Artist = ({ artist, comics }) => {
  const images = artist.comics.map(comic => comic.image)

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
        {images.map((each, index) => (
          <img key={index} src={each} alt='' />
        ))}
      </Zoom>
    </div>
  )
}

export default connect(state => ({ comics: state.comics }))(Artist)
