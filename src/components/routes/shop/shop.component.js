import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import CategoryPreview from "../../category-preview/category-preview.component";


// Context
import { CategoriesContext } from "../../../context/categories.context";

// Assets Styles
import './shop.styles.scss'

const Shop = ()=>{
  const {categoriesMap} = useContext(CategoriesContext)
  // Categories map pulls from Categories Context from Firebase


  return (
    <div className="shop-container">
      { Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  )
}

export default Shop;