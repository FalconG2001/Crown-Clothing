import { useContext } from "react";

import {
  HeaderBlockRoute,
  CheckoutContainerRoute,
  CheckoutHeaderRoute,
  TotalRoute,
} from "./checkout.styles.jsx";
import { CartContext } from "../../components/contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalPrice }: any = useContext(CartContext);

  return (
    <CheckoutContainerRoute>
      <CheckoutHeaderRoute>
        <HeaderBlockRoute>
          <span>Product</span>
        </HeaderBlockRoute>
        <HeaderBlockRoute>
          <span>Description</span>
        </HeaderBlockRoute>
        <HeaderBlockRoute>
          <span>Quantity</span>
        </HeaderBlockRoute>
        <HeaderBlockRoute>
          <span>Price</span>
        </HeaderBlockRoute>
        <HeaderBlockRoute>
          <span>Remove</span>
        </HeaderBlockRoute>
      </CheckoutHeaderRoute>
      {cartItems.map((cartItem: any) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <TotalRoute>Total: ${totalPrice}</TotalRoute>
    </CheckoutContainerRoute>
  );
};

export default Checkout;
