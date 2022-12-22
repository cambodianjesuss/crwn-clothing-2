// Components
import Button from '../button/button.component';

// Assets & Styles
import './cart-dropdown.styles.scss';

const CartDropown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropown