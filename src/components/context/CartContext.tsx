import { createContext, useContext, useState,useEffect, type ReactNode } from "react";
import type { Product } from "../types/Products";
import type { CartItem } from "../types/Cart";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  const addToCart = (product: Product,qty=1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [...prev, { product, quantity: qty }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
