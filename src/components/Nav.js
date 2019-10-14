import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../CSS/navbar.css'

const Nav = ({ currentUser, dispatch }) => {
  return (
    <div>
      <nav className={`nav-bar${!currentUser && '-no-user'}`}>
        <ul>
          <Link to={'/'}>
            <h3>Home</h3>
          </Link>
        </ul>
        {!currentUser ? (
          <>
            <ul>
              <Link to={'/login'}>
                <h3>Login</h3>
              </Link>
            </ul>
            <ul>
              <Link to={'/signup'}>
                <h3>Sign Up</h3>
              </Link>
            </ul>
          </>
        ) : (
          <ul>
            <Link to={'/profilepage'}>
              <h3>Profile</h3>
            </Link>
          </ul>
        )}
        <ul>
          <Link to={'/comics'}>
            <h3>Comics</h3>
          </Link>
        </ul>
        <ul>
          <Link to={'/artists'}>
            <h3>Artists</h3>
          </Link>
        </ul>
        {!currentUser ? null : (
          <ul>
            <h3
              onClick={() => {
                localStorage.removeItem('token')
                dispatch({ type: 'USER_SIGNOUT' })
              }}
            >
              <Link to={'/'}>Log Out</Link>
            </h3>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default connect(state => ({ currentUser: state.currentUser }))(Nav)
