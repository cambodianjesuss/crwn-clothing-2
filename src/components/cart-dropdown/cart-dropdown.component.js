import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// Context
import { CartContext } from '../../context/cart.context';

// Assets & Styles
import './cart-dropdown.styles.scss';

const CartDropown = () => {

  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen)
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((item)=> (
            <CartItem key={item.id} cartItem={item}/>
          ))
        }
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropown