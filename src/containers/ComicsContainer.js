import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import Comic from '../components/Comic'

class ComicsContainer extends React.Component {
    
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

export default connect(state => ({ comics: state.comics }))(ComicsContainer)