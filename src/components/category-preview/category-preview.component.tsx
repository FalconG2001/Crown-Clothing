import "./category-preview.styles.scss";

import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }: any) => {
  const navigate = useNavigate();
  const gotoParticularPage = (pageName: any) => {
    navigate(`/shop/${pageName}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => gotoParticularPage(title)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_: any, idx: any) => idx < 4)
          .map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
