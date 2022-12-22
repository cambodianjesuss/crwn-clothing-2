import { createContext, useState, useEffect } from "react";

// Data
import PRODUCTS from '../shop-data.json'

// Default context is products state
// then we set the products immediatly 
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({children})=>{
  const [products, setProducts] = useState(PRODUCTS);
  const value = {products};

  useEffect(()=>{
    setProducts(PRODUCTS);
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

