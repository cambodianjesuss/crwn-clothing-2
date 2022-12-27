import { useContext } from 'react'

// Context
import { CartContext } from '../../context/cart.context'

// Assets & Styles
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem})=> {
  
  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const { name, imageUrl, price, quantity} = cartItem;

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={clearItemHandler}> &#10005;</div>
    </div>
  )
}

export default CheckoutItem