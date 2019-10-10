import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Comic from '../components/Comic'

import * as actions from '../actions'

class ComicsContainer extends React.Component {

    componentDidMount(){
        this.props.getComics()
        // this.props.signin()
        this.props.increaseCounter()
        this.props.increaseCounter()
        this.props.increaseCounter()
        this.props.increaseCounterBy(4)
    }


    render(){
        return (
        <div>
            <Nav />
            <h1>Hello World</h1>
            {this.props.comics.map(comic => 
                <Comic comic={comic}/>
            )}
        </div>)
    }
}

const mapStateToProps = state => ({
    comics: state.comics
})

export default connect(mapStateToProps, actions)(ComicsContainer)