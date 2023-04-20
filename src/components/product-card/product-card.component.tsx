import "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";
import { FooterPC, ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }: any) => {
  const { addItemToCart }: any = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
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
