import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Comic = ({ comic, artists }) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className='comic-card'
      onPointerOver={() => setShow(!show)}
      onPointerOut={() => setShow(!show)}
    >
      <img src={comic.image} alt='' />

      <div className='comic-text-size'>
        {show ? (
          <>
            <h2 className='comic-card-text'>{comic.name}</h2>
            <h3 className='comic-card-text'>{comic.artist}</h3>
            <h3 className='comic-card-text'>{comic.date_added}</h3>
          </>
        ) : null}
      </div>
      <Link to={`/comics/${comic.id}`}>
        <button className='see-details-btn'>See Details</button>
      </Link>
    </div>
  )
}

export default connect(state => ({ artists: state.artists }))(Comic)
