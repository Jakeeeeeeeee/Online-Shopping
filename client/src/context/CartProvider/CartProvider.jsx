import react, { createContext, useEffect, useState } from 'react';
import { addItemToCart, clearItemFromCart, getCartItemsCount, getCartItemsPrice, removeItemFromCart } from '../../redux/cart/cartUtils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  cartItemsCount: 0,
  cartItemsPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {}
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setItemsCount] = useState(0);
  const [cartItemsPrice, setCartItemsPrice] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));
  
  useEffect(() => {
    setItemsCount(getCartItemsCount(cartItems));
    
    setCartItemsPrice(getCartItemsPrice(cartItems));
  },[cartItems]);

  return (
    <CartContext.Provider 
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        toggleHidden,
        addItem,
        removeItem,
        clearItem,
        cartItemsPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
