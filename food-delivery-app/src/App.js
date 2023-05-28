import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ShoppingCartPage from "./pages/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  );
};

export default App;
