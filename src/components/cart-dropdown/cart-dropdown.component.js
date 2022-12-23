import { useContext } from 'react';

// Components
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// Context
import { CartContext } from '../../context/cart.context';

// Assets & Styles
import './cart-dropdown.styles.scss';

const CartDropown = () => {

  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((item)=> (
            <CartItem key={item.id} cartItem={item}/>
          ))
        }
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropown