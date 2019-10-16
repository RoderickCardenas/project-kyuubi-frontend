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

  render () {
    return (
      <>
        {' '}
        <Nav />
        <div className='artists-container'>
          {this.props.artists.map(artist => (
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
