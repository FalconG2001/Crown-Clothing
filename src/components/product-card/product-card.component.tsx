import "./product-card.styles.scss";
import Button from "../button/button.component";

import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }: any) => {
  const { addItemToCart }: any = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
