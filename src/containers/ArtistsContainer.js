import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Artist from '../components/Artist'

import * as actions from '../actions'

class ArtistsContainer extends React.Component {
  componentDidMount () {
    this.props.getComics()
    this.props.getArtists()
  }

  render () {
    return (
      <div>
        <Nav />
        <h1>Hello World</h1>
        {this.props.artists.map(artist => (
          <Artist key={artist.id} artist={artist} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ artists: state.artists })

export default connect(
  mapStateToProps,
  actions
)(ArtistsContainer)
