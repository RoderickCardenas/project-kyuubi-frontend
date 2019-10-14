import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import * as actions from '../actions'

const SignUp = ({ createUser, history }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      username: e.target[2].value,
      password: e.target[3].value,
      avatar: e.target[4].value
    }
    createUser(user)
    e.target.reset()
    history.push('/')
  }

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input />
        <label>Last Name:</label>
        <input />
        <label>Username:</label>
        <input />
        <label>Password:</label>
        <input type='password' />
        <label>Avatar:</label>
        <input />
        <input className='submit btn' value='Create Account' type='submit' />
      </form>
    </div>
  )
}

export default connect(
  null,
  actions
)(SignUp)
