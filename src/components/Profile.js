import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import '../CSS/profile.css'

const Profile = ({ currentUser }) => {
  return (
    <div>
      <Nav />
      <h1 className='profile-container'>Profile Page</h1>
      {currentUser ? (
        <div className='profile-container'>
          <img src={currentUser.avatar} alt='' />
          <h2>{currentUser.first_name}</h2>
          <h2>{currentUser.last_name}</h2>
          <h2>{currentUser.username}</h2>
          <h2>Votes Remaining: {currentUser.votes}</h2>
        </div>
      ) : (
        <div className='profile-container'>
          <h1>Please Log In to view your profile</h1>
        </div>
      )}
    </div>
  )
}

export default connect(state => ({ currentUser: state.currentUser }))(Profile)
