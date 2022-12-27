import { useContext, Fragment } from "react";

// Components
import ProductCard from "../../product-card/product-card.component";

// Context
import { CategoriesContext } from "../../../context/categories.context";

// Assets Styles
import './shop.styles.scss'

const Shop = ()=>{
  const {categoriesMap} = useContext(CategoriesContext)
  console.log(categoriesMap)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => {
          return (
            <Fragment key={title.id}>
            <h2>{title}</h2>
            <div className="products-container">
              {
                categoriesMap[title].map((product)=>(
                  <ProductCard key={product.id} product={product}/>
                ))
              }
            </div>
          </Fragment>
          )
        })
      }
    </Fragment>
  )
}

export default Shop;