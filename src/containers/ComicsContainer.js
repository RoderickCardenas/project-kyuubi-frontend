import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Comic from '../components/Comic'

import '../CSS/comics.css'

import * as actions from '../actions'

class ComicsContainer extends React.Component {
  componentDidMount () {
    this.props.getComics()
  }

  shuffle (comics = []) {
    let currentIndex = comics.length

    let temporaryValue

    let randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      // And swap it with the current element.
      temporaryValue = comics[currentIndex]
      comics[currentIndex] = comics[randomIndex]
      comics[randomIndex] = temporaryValue
    }

    return comics
  }

  render () {
    return (
      <>
        <Nav />
        <div className='comics-container'>
          {this.shuffle(this.props.comics).map(comic => (
            <Comic key={comic.complete_comic.id} comic={comic.complete_comic} />
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({ comics: state.comics })

export default connect(
  mapStateToProps,
  actions
)(ComicsContainer)
