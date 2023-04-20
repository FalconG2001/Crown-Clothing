import {
  ImageContainer,
  QuantityContainer,
  CheckoutItemContainer,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }: any) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart }: any =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <QuantityContainer>
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </QuantityContainer>
      <span className="price">${price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
