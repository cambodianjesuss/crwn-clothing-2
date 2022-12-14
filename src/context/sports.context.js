// sports

import { createContext, useState } from "react";


export const SportsContext = createContext();

export const SportsProvider = ({children})=>{
  const [sports, setSports] = useState([]);
  const value = {sports, setSports};

  // setSports
  return <SportsContext.Provider value={value}>{children}</SportsContext.Provider>
}