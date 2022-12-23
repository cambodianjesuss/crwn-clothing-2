import { useContext } from 'react';

// Components
import Button from '../button/button.component';

// Context
import { CartContext } from '../../context/cart.context';

// Assets & Styles
import './product-card.styles.scss'

const ProductCard = ({product}) => {
  const {name, price, imageUrl, id} = product;

  const { addItemToCart } = useContext(CartContext);

  const onClickHandler = (product) => {
    console.log(product.id, product.name, product.price)
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <span>{id}</span>
      </div>
      <Button buttonType="inverted" onClick={()=> onClickHandler(product)}>Add to cart</Button>
    </div>
  )
}

export default ProductCard;