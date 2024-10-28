import { CartProvider } from "./context/CartContext";
export function GlobalProvider({ children }: any) {
  return <CartProvider>{children}</CartProvider>;
}
