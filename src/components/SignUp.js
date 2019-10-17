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
      <div className='signUp'>
        <form className='signUpForm' onSubmit={handleSubmit}>
          <label className='signUpLabel'>First Name:</label>
          <input className='signUpInput' />
          <label className='signUpLabel'>Last Name:</label>
          <input className='signUpInput' />
          <label className='signUpLabel'>Username:</label>
          <input className='signUpInput' />
          <label className='signUpLabelPassword'>Password:</label>
          <input className='signUpInput' type='password' />
          <label className='signUpLabelAvatar'>Avatar:</label>
          <input className='signUpInput' />
          <input className='signUp-btn' value='Create Account' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default connect(
  null,
  actions
)(SignUp)
