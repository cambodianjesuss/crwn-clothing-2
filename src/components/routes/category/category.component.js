import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../../product-card/product-card.component";

// Context
import { CategoriesContext } from "../../../context/categories.context";

// Assets & Styles
import './category.styles.scss'

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(()=>{
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product)=> (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </Fragment>
  )
}

export default Category;