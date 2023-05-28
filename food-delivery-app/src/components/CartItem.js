import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleRemoveClick = () => {
    onRemove(item);
  };

  const handleIncreaseQuantity = () => {
    onUpdateQuantity(item, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    onUpdateQuantity(item, item.quantity - 1);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleIncreaseQuantity}
        >
          Increase Quantity
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDecreaseQuantity}
        >
          Decrease Quantity
        </Button>
        <IconButton onClick={handleRemoveClick}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItem;
