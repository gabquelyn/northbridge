"use client";
import React, { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

type CartContextType = {
  cart: number[];
  updateCartHandler: (item: number) => void;
  removeItemHandler: (item: number) => void;
  clearCartHandler: () => void;
};

export const cartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function cartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<number[]>([]);
  useEffect(() => {
    const data = Cookie.get("cart");
    if (data) setCart(JSON.parse(data));
  }, []);

  const updateCartHandler = (item: number) => {
    const isExisiting = cart.find((i) => i == item);
    if (isExisiting) return;

    setCart((prev) => {
      const updated = [...prev, item];
      Cookie.set("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItemHandler = (item: number) => {
    setCart((prev) => {
      const updated = prev.filter((i) => i !== item);
      Cookie.set("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const clearCartHandler = () => {
    setCart([]);
    Cookie.remove("cart");
  };

  return (
    <cartContext.Provider
      value={{ cart, updateCartHandler, clearCartHandler, removeItemHandler }}
    >
      {children}
    </cartContext.Provider>
  );
}
