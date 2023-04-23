import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap: any = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title: any) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
