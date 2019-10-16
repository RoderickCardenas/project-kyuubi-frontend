import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Artist from '../components/Artist'

import '../CSS/artists.css'

import * as actions from '../actions'

class ArtistsContainer extends React.Component {
  componentDidMount () {
    this.props.getArtists()
  }

  shuffle (artists = []) {
    let currentIndex = artists.length

    let temporaryValue

    let randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      // And swap it with the current element.
      temporaryValue = artists[currentIndex]
      artists[currentIndex] = artists[randomIndex]
      artists[randomIndex] = temporaryValue
    }

    return artists
  }

  render () {
    return (
      <>
        <Nav />
        <div className='artists-container'>
          {this.shuffle(this.props.artists).map(artist => (
            <Artist
              key={artist.complete_artist.id}
              artist={artist.complete_artist}
            />
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({ artists: state.artists })

export default connect(
  mapStateToProps,
  actions
)(ArtistsContainer)
