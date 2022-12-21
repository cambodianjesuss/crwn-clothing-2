import { createContext, useState } from 'react';

export const CartToggleContext = createContext();

export const CartToggleProvider = ({children})=> {

  const [showCart, setShowCart] = useState(false);

  const value = { showCart, setShowCart}



  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
}