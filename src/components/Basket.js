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
