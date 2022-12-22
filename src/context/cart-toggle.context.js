import { createContext, useState } from 'react';

export const CartToggleContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
});

export const CartToggleProvider = ({children})=> {

  const [isCartOpen, cartItems, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen}

  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
}