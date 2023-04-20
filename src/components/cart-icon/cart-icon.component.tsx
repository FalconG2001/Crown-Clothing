import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cartState, toggleCartState }: any = useContext(CartContext);
  const { cartCount }: any = useContext(CartContext);
  const cartStateToggler = () => toggleCartState(!cartState);

  return (
    <CartIconContainer onClick={cartStateToggler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
