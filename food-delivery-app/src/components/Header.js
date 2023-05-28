import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Food Delivery App
        </Typography>
        <Link
          to="/"
          style={{ marginRight: 20, textDecoration: "none", color: "#fff" }}
        >
          Shops
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "#fff" }}>
          Cart
        </Link>
      </Toolbar>
    </AppBar>
  );
};
