import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosBasket } from 'react-icons/io'
import '../CSS/navbar.css'
import * as actions from '../actions'

const Nav = ({ currentUser, basket, logOut, loadCart }) => {
  useEffect(
    () => {
      if (localStorage.getItem('cart') !== null) {
        loadCart('cart')
      }
    },
    [loadCart]
  )

  const handleLogOut = () => {
    logOut()
  }
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
            <Link to={'/profile'}>
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
          <>
            <ul>
              <h3 onClick={handleLogOut}>
                <Link to={'/'}>Log Out</Link>
              </h3>
            </ul>
            <ul>
              <Link to={'/basket'}>
                <h3 className='basket'>
                  <IoIosBasket />
                </h3>
                <h3 className='basket-number'>{basket ? basket.length : 0}</h3>
              </Link>
            </ul>
          </>
        )}
      </nav>
    </div>
  )
}

export default connect(
  state => ({
    currentUser: state.currentUser,
    basket: state.basket
  }),
  actions
)(Nav)
