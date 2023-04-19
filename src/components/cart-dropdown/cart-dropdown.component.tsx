import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const CartDropDown = () => {
  const { cartItems }: any = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
