import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
  const {products} = useContext(ProductsContext)


  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;