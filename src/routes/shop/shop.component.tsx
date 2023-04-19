import { useContext } from "react";
import { ProductContext } from "../../components/contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products }: any = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
