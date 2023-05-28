import React, { useState, useEffect } from "react";
import { Typography, Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import goodsImage from "images/goose ukr.jpeg";
const GoodsPage = ({ shopId }) => {
  const { addToCart } = useCart();
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get(`/api/shops/${shopId}/goods`).then((response) => {
      setGoods(response.data);
    });
  }, [shopId]);

  const handleAddToCart = (good) => {
    addToCart(good);
    console.log("Added to cart:", good);
  };

  return (
    <div>
      <Typography variant="h4" component="div" align="center">
        Goods
      </Typography>
      <Grid container spacing={2}>
        {goods.map((good) => (
          <Grid item xs={12} sm={6} md={4} key={good.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{good.name}</Typography>
                <img
                  src={good.image ? `/images/${good.image}` : goodsImage}
                  alt={good.name}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <Typography variant="body2">{good.description}</Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(good)}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GoodsPage;
