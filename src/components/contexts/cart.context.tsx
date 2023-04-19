import { createContext, useState } from "react";

const addCartItem: any = (cartItems: any, productToAdd: any) => {
  for (let cartItemIdx in cartItems) {
    if (cartItems[cartItemIdx].id === productToAdd.id) {
      cartItems[cartItemIdx].quantity++;
      return [...cartItems];
    }
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext: any = createContext({
  cartState: false,
  toggleCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: any) => {
  const [cartState, toggleCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart: any = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartCount(cartCount + 1);
  };

  const value = {
    cartState,
    toggleCartState,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
