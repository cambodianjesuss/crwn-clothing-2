import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Data


// Default context is products state
// then we set the products immediatly 
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({children})=>{
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }

    getCategoriesMap();
  }, [])


  const value = {products};

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

