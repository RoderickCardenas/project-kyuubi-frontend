import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../CSS/forms.css'

const Login = ({ logIn, history }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    logIn(user)
    e.target.reset()
    history.push('/')
  }

  return (
    <div>
      <Nav />
      <div className='logIn'>
        <form className='logInForm' onSubmit={handleSubmit}>
          <label className='logInLabel'>Username:</label>
          <input id='logInInput' />
          <br />
          <label className='password'>Password:</label>
          <input id='logInInput' type='password' />
          <br />
          <input className='logIn-btn' type='submit' value='Login' />
        </form>
      </div>
    </div>
  )
}

export default connect(
  null,
  actions
)(Login)
