import React from 'react'
import { connect } from 'react-redux'
import '../CSS/basket.css'
import * as actions from '../actions'

const Basket = ({ currentUser, basket, emptyCart, makePurchase }) => {
  const total = () => {
    let totalPrice = 0
    basket.forEach(item => {
      totalPrice += item.price
    })
    return totalPrice.toFixed(2)
  }

  const handleClick = () => {
    emptyCart()
  }

  const handleCheckOut = () => {
    basket.forEach(comic => makePurchase(currentUser.id, comic.id))
  }
  return (
    <>
      {basket.map(item => (
        <div key={item.id} className='basket-item'>
          <h1>{item.name}</h1>
          <h1>{item.artist}</h1>
          <h2 className='basket-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
          <img src={item.image} alt='' />
          <h2>£{item.price}</h2>
        </div>
      ))}
      <h1 className='basket-item'>
        Total: £{basket ? total() : 0}
        {basket.length > 0 ? (
          <>
            <button onClick={handleCheckOut} className='make-purchase-btn'>
              Checkout
            </button>
            <button onClick={handleClick} className='empty-cart-btn'>
              Empty Cart
            </button>
          </>
        ) : null}
      </h1>
    </>
  )
}

export default connect(
  state => ({ basket: state.basket, currentUser: state.currentUser }),
  actions
)(Basket)
