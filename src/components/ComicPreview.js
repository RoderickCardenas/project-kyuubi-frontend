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
      this.props.loggedIn()
    } else {
    }
  }

  componentDidMount () {
    this.props.getCompleteComic(parseInt(this.props.id))
  }

  render () {
    const { comic_preview } = this.props
    const { handleIncrement } = this
    return (
      <div>
        <Nav />
        {comic_preview ? (
          <div className='comic-preview-container'>
            <h1>{comic_preview.name}</h1>
            <h2>{comic_preview.artist}</h2>
            <img src={comic_preview.image} alt='' />
            <h2>Current Votes: </h2>
            <h2 className='current-votes'>
              {comic_preview.votes > 0 ? comic_preview.votes : 0}
            </h2>
            <button className='counterUp-btn' onClick={handleIncrement}>
              +
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
  comic_preview: state.comic_preview
})
export default connect(
  mapStateToProps,
  actions
)(ComicPreview)
