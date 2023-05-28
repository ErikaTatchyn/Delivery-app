import React, { useState, useEffect } from "react";
import { Typography, Grid, Card, CardContent, Button } from "@mui/material";

import GoodsPage from "../components/Goods";
import ShopList from "../components/ShopList";
import axios from "axios";
import { Header } from "../components/Header";

const ShopPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    // Fetch the shop data from the database
    axios
      .get("/api/shops")
      .then((response) => {
        setShops(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shop data:", error);
      });
  }, []);

  const handleShopSelect = (shopId) => {
    setSelectedShop(shopId);
  };

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ShopList shops={shops} onSelectShop={handleShopSelect} />
        </Grid>
        <Grid item xs={9}>
          <GoodsPage shopId={selectedShop} />
        </Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
