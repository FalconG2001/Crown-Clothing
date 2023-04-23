import "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import { FooterPC, ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <FooterPC>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </FooterPC>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
