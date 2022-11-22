import React from 'react'
import Cart from '../icons/Cart'
import './css/CartWidget.css'

const CartWidget = () => {
  return (
    <div className="carrito">
        <Cart />
        <span className="widget">2</span>
    </div>

  )
}

export default CartWidget