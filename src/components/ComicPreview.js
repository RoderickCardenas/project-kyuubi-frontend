import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import '../CSS/comics.css'
import * as actions from '../actions'

class ComicPreview extends React.Component {
  handleIncrement = () => {
    if (this.props.currentUser) {
      this.props.incrementVote(
        this.props.currentUser.id,
        parseInt(this.props.id)
      )
    } else {
    }
  }

  handleAddToBasket = () => {
    this.props.saveCart('cart', this.props.basket, this.props.comic_preview)
  }

  componentDidMount () {
    this.props.getCompleteComic(parseInt(this.props.id))
  }

  render () {
    const { comic_preview, currentUser } = this.props
    const { handleIncrement, handleAddToBasket } = this
    return (
      <div>
        <Nav />
        {comic_preview ? (
          <div className='comic-preview'>
            <h1>{comic_preview.name}</h1>
            <h2>{comic_preview.artist}</h2>
            <img src={comic_preview.image} alt='' />
            <h2>Description:</h2>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
            <h2>Current Votes: </h2>
            <h2 className='current-votes'>
              {comic_preview.votes > 0 ? comic_preview.votes : 0}
            </h2>
            <h2>Price: £{comic_preview.price}</h2>
            <button
              className='counterUp-btn'
              onClick={
                currentUser
                  ? () => handleIncrement()
                  : () => alert('You must be logged in to vote!')
              }
            >
              +
            </button>
            <button
              className='add-to-basket-btn'
              onClick={
                !currentUser
                  ? () =>
                    alert('You have to be logged in to add items to a basket')
                  : () => handleAddToBasket()
              }
            >
              Add to basket
            </button>
          </div>
        ) : (
          <h1>Loading Comic</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  comic_preview: state.comic_preview,
  basket: state.basket
})
export default connect(
  mapStateToProps,
  actions
)(ComicPreview)
