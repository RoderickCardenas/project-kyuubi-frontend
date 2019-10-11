import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Comic from '../components/Comic'

import * as actions from '../actions'

class ComicsContainer extends React.Component {
  componentDidMount () {
    this.props.getComics()
    this.props.getArtists()
  }

  render () {
    return (
      <div>
        <Nav />
        {this.props.comics.map(comic => (
          <Comic key={comic.id} comic={comic} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ comics: state.comics })

export default connect(
  mapStateToProps,
  actions
)(ComicsContainer)
