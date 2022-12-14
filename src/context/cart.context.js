import { createContext, useState, useEffect } from 'react';

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);

  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem)=> cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{},
  removeItemFromCart: ()=>{},
  clearItemFromCart: ()=>{},
  cartTotal: 0
});

export const CartProvider = ({children})=> {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Setting new state
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  }

  useEffect(()=>{
    // Reduce & add up toatl cart items quantity
    const newCartCount = cartItems.reduce((total, currentItem)=> total + currentItem.quantity, 0);
    
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(()=>{
    // Reduce & add up toatl cart items quantity
    const newCartTotal = cartItems.reduce((total, currentItem)=> total + currentItem.quantity * currentItem.price, 0);
    
    setCartTotal(newCartTotal);
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}