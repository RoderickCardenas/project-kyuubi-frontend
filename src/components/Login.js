import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import * as actions from '../actions'

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
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input />
        <label>Password:</label>
        <input type='password' />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default connect(
  null,
  actions
)(Login)
