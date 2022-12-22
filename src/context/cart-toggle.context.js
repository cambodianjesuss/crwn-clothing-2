import { createContext, useState } from 'react';

// Helper function to check if we need to add a new cart item or update quantity
const addCartItem = (cartItems, productToAdd) => {

}

export const CartToggleContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{}
});

export const CartToggleProvider = ({children})=> {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  } 


  const value = { isCartOpen, setIsCartOpen}

  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
}