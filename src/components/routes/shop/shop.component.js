import { useContext } from "react";

// Components
import ProductCard from "../../product-card/product-card.component";

// Context
import { ProductsContext } from "../../../context/products.context";

// Assets Styles
import './shop.styles.scss'

const Shop = ()=>{
  const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
      {
        products.map((product)=> (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Shop;