import React from 'react'
import '../CSS/banners.css'
import { Slide } from 'react-slideshow-image'

class Banners extends React.Component {
  renderBannersSlideOne = () => {
    let imagesOne = [
      {
        image: 'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner1-1.png',
        link: 'https://www.zavvi.com/franchises/avengers-endgame.list'
      },
      {
        image: 'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner4.png',
        link: 'https://www.dccomics.com/movies/joker'
      },
      {
        image: 'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner1-1.png',
        link: 'https://www.zavvi.com/franchises/avengers-endgame.list'
      },
      {
        image: 'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner4.png',
        link: 'https://www.dccomics.com/movies/joker'
      }
    ]
    let key = 0
    return imagesOne.map(item => {
      key += 1
      return (
        <a key={key} href={item.link} target='_blank' rel='noopener noreferrer'>
          <img key={key} className='each-slide' src={item.image} alt='' />
        </a>
      )
    })
  }

  slideProperties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

  render () {
    const { renderBannersSlideOne, slideProperties } = this
    return (
      <>
        <Slide className='banner-1' {...slideProperties}>
          {renderBannersSlideOne()}
        </Slide>
        <div className='banner-2' />
        <div className='banner-3' />
      </>
    )
  }
}

export default Banners
