import { createContext, useEffect, useState } from "react";

const addCartItem: any = (cartItems: any, productToAdd: any) => {
  for (let cartItemIdx in cartItems) {
    if (cartItems[cartItemIdx].id === productToAdd.id) {
      cartItems[cartItemIdx].quantity++;
      return [...cartItems];
    }
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: any) => cartItem.id !== cartItemToRemove.id
    );
  }

  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: any, cartItemToClear: any) => {
  return cartItems.filter(
    (cartItem: any) => cartItem.id !== cartItemToClear.id
  );
};

// const addCartItem: any = (cartItems: any, productToAdd: any) => {
//     const existingCartItem = cartItems.find(
//       (cartItem: any) => cartItem.id === productToAdd.id
//     );
//     if (existingCartItem) {
//       return cartItems.map((cartItem: any) =>
//         cartItem.id === productToAdd.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//     }
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
//   };

export const CartContext: any = createContext({
  cartState: false,
  toggleCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }: any) => {
  const [cartState, toggleCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.price * cartItem.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart: any = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart: any = (cartItemToRemove: any) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart: any = (cartItemToClear: any) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    cartState,
    toggleCartState,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
