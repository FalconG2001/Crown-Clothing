import "./category-preview.styles.jsx";

import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";
import {
  CategoryPreviewContainer,
  PreviewCategory,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }: any) => {
  const navigate = useNavigate();
  const gotoParticularPage = (pageName: any) => {
    navigate(`/shop/${pageName}`);
  };
  return (
    <CategoryPreviewContainer>
      <h2>
        <span className="title" onClick={() => gotoParticularPage(title)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <PreviewCategory>
        {products
          .filter((_: any, idx: any) => idx < 4)
          .map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </PreviewCategory>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
