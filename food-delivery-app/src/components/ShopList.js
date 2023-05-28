import { Button, Typography } from "@mui/material";

const ShopList = ({ shops, onSelectShop }) => {
  return (
    <div>
      <Typography variant="h6">Shops</Typography>
      {shops.map((shop) => (
        <Button key={shop.id} onClick={() => onSelectShop(shop.id)} fullWidth>
          {shop.name}
        </Button>
      ))}
    </div>
  );
};

export default ShopList;
