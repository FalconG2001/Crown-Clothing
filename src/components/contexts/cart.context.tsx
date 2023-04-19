import { createContext, useState } from "react";

export const CartContext: any = createContext({
  cartState: false,
  toggleCartState: () => {},
});

export const CartProvider = ({ children }: any) => {
  const [cartState, toggleCartState] = useState(false);
  const value = { cartState, toggleCartState };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
