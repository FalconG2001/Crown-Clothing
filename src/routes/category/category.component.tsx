import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryContainerRoute,
  CategoryTitleRoute,
} from "./category.styles.jsx";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from "../../store/categories/category.selector";

const Category = () => {
  const { category }: any = useParams();
  const categoriesMap: any = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoryIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitleRoute>{category.toUpperCase()}</CategoryTitleRoute>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainerRoute>
          {products &&
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainerRoute>
      )}
    </Fragment>
  );
};

export default Category;
