"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    setCartToState();
  }, []);
  const setCartToState = () => {
    setCart(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") ?? "") : []);
  };
  const addItemToCart = async ({ product, name }: any) => {
    const item = { product, name };

    let newCartItems;

    const itemIsExist = cart?.cartItems.find((i: any) => i.product === item.product);
    if (itemIsExist) {
      cart?.cartItems.map;
      (i: any) => (i.product === itemIsExist.product ? item : i);
    } else {
      newCartItems = [...(cart.cartItems || []), item];
    }
    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
  };
  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>;
};
