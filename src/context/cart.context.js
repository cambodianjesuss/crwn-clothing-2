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

// Helper function to remove an item from the checkout page


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{},
});

export const CartProvider = ({children})=> {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  
  const removeItemToCart = (cartItems, cartItemToRemove) => {
    // Find the cart item

    // Check if quantity is equal to 1, then we remove that item completely

    // Return back cartItems with matching cartItem with reduced quantity
  }

  useEffect(()=>{
    // Reduce & add up toatl cart items quantity
    const newCartCount = cartItems.reduce((total, currentItem)=> total + currentItem.quantity, 0);
    
    setCartCount(newCartCount);
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}