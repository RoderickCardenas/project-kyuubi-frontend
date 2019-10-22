import React from 'react'
import '../CSS/banners.css'
import { Slide } from 'react-slideshow-image'

class Banners extends React.Component {
  renderBannersSlideOne = () => {
    let imagesOne = [
      'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner1-1.png',
      'https://bannersforapp.s3.eu-west-2.amazonaws.com/banner4.png'
    ]
    let key = 0
    return imagesOne.map(image => {
      key += 1
      return <img key={key} className='each-slide' src={image} alt='' />
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
        {/* <div className='banner-1' /> */}
        {/* {renderBannersSlideOne()} */}
        <div className='banner-2' />
        <div className='banner-3' />
      </>
    )
  }
}

export default Banners
