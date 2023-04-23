import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CartDropDown = () => {
  const cartItems: any = useSelector(selectCartItems);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: any) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotoCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
