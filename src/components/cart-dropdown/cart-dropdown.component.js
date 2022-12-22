import { useContext } from 'react';

// Components
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// Context
import { CartToggleContext } from '../../context/cart.context';

// Assets & Styles
import './cart-dropdown.styles.scss';

const CartDropown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <CartItem />
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropown