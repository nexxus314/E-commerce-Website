import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types/Products";

type ProductContextType = {
  products: Product[];
};

const ProductContext = createContext<ProductContextType>({
  products: [],
});

type ChildrenProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); 
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
