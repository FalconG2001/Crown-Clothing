import {
  ImageContainer,
  QuantityContainer,
  CheckoutItemContainer,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";

const CheckoutItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
