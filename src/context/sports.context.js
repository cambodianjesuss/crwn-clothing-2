// sports

import { createContext, useState } from "react";

export const SportsContext = createContext();

export const SportsProvider = ({children})=>{

  return <SportsContext.Provider value={}>{children}</SportsContext.Provider>
}