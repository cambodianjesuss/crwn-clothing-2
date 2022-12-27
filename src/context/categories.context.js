import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Data

// Default context is products state
// then we set the products immediatly 
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children})=>{
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
      console.log(categoriesMap)
    };

    getCategoriesMap();
  }, [])

  const value = {categoriesMap};

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
