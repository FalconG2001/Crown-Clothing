import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cartState, toggleCartState }: any = useContext(CartContext);
  const cartStateToggler = () => toggleCartState(!cartState);

  return (
    <div className="cart-icon-container" onClick={cartStateToggler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
