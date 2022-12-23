import { createContext, useState } from 'react';

// Helper function to check if we need to add a new cart item or update quantity
const addCartItem = (cartItems, productToAdd) => {

  // If cart item exists
  const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)

  // If found, incrememnt quantity, else return 
  if(existingCartItem){
    return cartItems.map((cartItem)=> cartItem.id === productToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  // Return new array wwith modified cartItems/ new cart item
  return [...cartItems, {...productToAdd, quantity: 1} ]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{}
});

export const CartProvider = ({children})=> {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  } 


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}