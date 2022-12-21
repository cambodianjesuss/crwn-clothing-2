import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropown