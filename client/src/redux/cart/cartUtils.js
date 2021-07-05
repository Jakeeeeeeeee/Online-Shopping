export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id ? ({
        ...cartItem, quantity: cartItem.quantity + 1
      }) : (
        cartItem
      )
    )
  }

  return [...cartItems, {...cartItemsToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map((cartItem) => (
    cartItem.id === cartItemsToRemove.id ? (
      { ...cartItem, quantity: cartItem.quantity - 1 }
     ) : (cartItem)
  ));
};

export const clearItemFromCart = (cartItems, cartItemsToClear) => 
  cartItems.filter(
    (cartItem) => cartItem.id !== cartItemsToClear.id
  );

export const getCartItemsCount = (cartItems) => 
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

export const getCartItemsPrice = (cartItems) => 
  cartItems.reduce((accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );