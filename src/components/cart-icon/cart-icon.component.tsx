import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectCartState,
} from "../../store/cart/cart.selector.js";
import { toggleCartState } from "../../store/cart/cart.action.js";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const cartState = useSelector(selectCartState);

  const cartStateToggler = () => dispatch(toggleCartState(!cartState));

  return (
    <CartIconContainer onClick={cartStateToggler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
