import { useSelector } from "react-redux";

import {
  HeaderBlockRoute,
  CheckoutContainerRoute,
  CheckoutHeaderRoute,
  TotalRoute,
} from "./checkout.styles.jsx";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";

const Checkout = () => {
  const cartItems: any = useSelector(selectCartItems);
  const totalPrice: any = useSelector(selectCartTotal);

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
