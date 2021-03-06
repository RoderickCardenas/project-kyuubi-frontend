import React from 'react'
import { connect } from 'react-redux'
import Comic from '../components/Comic'
import Banners from '../components/Banners'

import '../CSS/comics.css'

import * as actions from '../actions'

class ComicsContainer extends React.Component {
  componentDidMount () {
    if (this.props.comics.length > 0) return
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
        <Banners />
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
