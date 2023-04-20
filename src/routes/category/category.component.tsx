import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../components/contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryContainerRoute,
  CategoryTitleRoute,
} from "./category.styles.jsx";

const Category = () => {
  const { category }: any = useParams();
  const { categoriesMap }: any = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitleRoute>{category.toUpperCase()}</CategoryTitleRoute>
      <CategoryContainerRoute>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainerRoute>
    </Fragment>
  );
};

export default Category;
