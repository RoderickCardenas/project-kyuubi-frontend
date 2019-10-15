import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'

const Basket = ({ basket }) => {
  const total = () => {
    let totalPrice = 0
    basket.forEach(item => {
      totalPrice += item.price
    })
    return totalPrice.toFixed(2)
  }
  return (
    <>
      <Nav />
      {basket.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.artist}</h1>
          <img src={item.image} alt='' />
          <h2>{item.price}</h2>
        </div>
      ))}
      <h1>£{basket ? total() : 0}</h1>
    </>
  )
}

export default connect(state => ({ basket: state.basket }))(Basket)
