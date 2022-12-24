import { useContext } from 'react';

// Context
import { CartContext } from '../../../context/cart.context';

// Assets & Styles
import './checkout.styles.scss'

const Checkout = () => {

  const { cartItems } = useContext(CartContext)
  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {
          cartItems.map((cartItem)=>{

            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Checkout;