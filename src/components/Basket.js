import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import '../CSS/basket.css'
import * as actions from '../actions'

const Basket = ({ basket, emptyCart }) => {
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
  return (
    <>
      <Nav />
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
        Total: £{basket ? total() : 0}{' '}
        {basket.length > 0 ? (
          <button onClick={handleClick} className='empty-cart-btn'>
            Empty Cart
          </button>
        ) : null}
      </h1>
    </>
  )
}

export default connect(
  state => ({ basket: state.basket }),
  actions
)(Basket)
