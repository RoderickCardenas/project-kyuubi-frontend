import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

const Profile = ({ currentUser }) => {
  return (
    <>
      <Nav />
      <h1>This is Your Profile Page</h1>
      {currentUser ? (
        <>
          <h2>{currentUser.first_name}</h2>
          <h2>{currentUser.last_name}</h2>
          <h2>{currentUser.username}</h2>
          <h2>Votes Remaining: {currentUser.votes}</h2>
        </>
      ) : (
        <h1>Please Log In to view your profile</h1>
      )}
    </>
  )
}

export default connect(state => ({ currentUser: state.currentUser }))(Profile)
