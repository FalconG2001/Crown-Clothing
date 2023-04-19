import { createContext, useState } from "react";

import PRODUCTS from "../../shop-data.json";

export const ProductContext: any = createContext({
  products: [],
});

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
