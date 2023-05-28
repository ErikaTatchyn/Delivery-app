import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { Header } from "../components/Header";
const ShoppingCartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRemoveFromCart = (goodId) => {
    removeFromCart(goodId);
  };

  const handleUpdateQuantity = (goodId, quantity) => {
    updateQuantity(goodId, quantity);
  };

  const handleSubmitOrder = () => {
    const orderData = {
      cart,
      email,
      phoneNumber,
      address,
    };

    axios
      .post("/api/orders", orderData)
      .then((response) => {
        console.log("Order submitted:", response.data);
        // Clear the cart after successful order submission
        clearCart();
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Header />
      <Typography variant="h4" component="div" align="center">
        Shopping Cart
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", marginBottom: "1rem" }}
              >
                <CardMedia
                  component="img"
                  src={item.image}
                  alt={item.name}
                  style={{ width: 150, height: 150, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="body2">Price: ${item.price}</Typography>
                  <TextField
                    type="number"
                    label="Quantity"
                    value={item.quantity}
                    onChange={(event) =>
                      handleUpdateQuantity(
                        item.id,
                        parseInt(event.target.value)
                      )
                    }
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1" align="center">
              Your cart is empty.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="div">
            Contact Information
          </Typography>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            margin="normal"
          />
          <TextField
            label="Address"
            fullWidth
            value={address}
            onChange={handleAddressChange}
            margin="normal"
          />
          <Typography variant="h6" component="div">
            Order Summary
          </Typography>
          <Typography variant="body2">
            Total Price: ${calculateTotalPrice()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitOrder}
            disabled={cart.length === 0 || !email || !phoneNumber || !address}
            fullWidth
          >
            Submit Order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartPage;
