import { useContext } from 'react';

// Context
import { CartContext } from '../../../context/cart.context';

// Assets & Styles
import './checkout.styles.scss'

const Checkout = () => {

  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      <div>
        {
          cartItems.map((cartItem)=>{

            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span onClick={()=> removeItemToCart(cartItem)}>decrement</span>
                <br />
                <span onClick={()=> addItemToCart(cartItem)}>increment</span>
              </div>
            )
          })
        }
        <span className='total'>Total: 0</span>
      </div>
    </div>
  )
}

export default Checkout;