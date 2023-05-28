import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (good) => {
    setCart((prevCart) => [...prevCart, good]);
  };

  const removeFromCart = (goodId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== goodId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (goodId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === goodId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
