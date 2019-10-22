import React from 'react'
import '../CSS/banners.css'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    showRecent: true
  }
  componentDidMount () {
    const { getTopComic, getRecentlyAdded } = this.props
    if (this.props.topComic.length > 0 && this.props.recentComics.length > 0) {
      return
    }
    getTopComic()
    getRecentlyAdded()
  }

  handleClick = () => {
    this.setState({ showRecent: !this.state.showRecent })
  }

  toShow = comics =>
    comics.map(comic => (
      <div className='comic-home-container'>
        <Link to={`/comics/${comic.complete_comic.id}`}>
          <div className='comic-home-text-container'>
            <h2>{comic.complete_comic.name}</h2>
            <p className='comic-home-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h2>£{comic.complete_comic.price}</h2>
          </div>
          <img
            className='mainpage-top-comic'
            src={comic.complete_comic.image}
            alt=''
          />
        </Link>
      </div>
    ))
  render () {
    const { topComic, recentComics } = this.props
    const { showRecent } = this.state
    return (
      <div className='main-container'>
        <button
          className='main-page-button-one'
          style={
            showRecent
              ? { background: 'lightgrey' }
              : { background: 'darkgray' }
          }
          onClick={showRecent ? this.handleClick : null}
        >
          Top Voted
        </button>
        <button
          className='main-page-button-two'
          style={
            showRecent
              ? { background: 'darkgray' }
              : { background: 'lightgray' }
          }
          onClick={showRecent ? null : this.handleClick}
        >
          Recently Added
        </button>
        <div className='main-comic-holder'>
          {topComic.length > 0 ? (
            showRecent ? (
              this.toShow(recentComics)
            ) : (
              this.toShow(topComic)
            )
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ topComic: state.topComic, recentComics: state.recentComics }),
  actions
)(HomePage)
