import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const ShopCard = ({ shop }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {shop.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shop.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
