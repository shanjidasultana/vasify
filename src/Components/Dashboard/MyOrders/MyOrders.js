import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleOnDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/orders/${id}`;
    const proceed = window.confirm("Are You Sure, You Want To Delete ?");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully");
            const remainingOrders = order.filter((o) => o._id !== id);
            setOrder(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Typography variant="h5">This Your Orders</Typography>
      <Box sx={{ my: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {order.map((order) => (
            <Grid key={order._id} item xs={12} md={4}>
              <Card key={order._id}>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    order?.product?.img
                      ? order?.product?.img
                      : order?.product?.picture
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {order?.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order?.product?.about.slice(0, 200)}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {order?.productPrice}
                  </Typography>
                  <Typography variant="body" sx={{ mt: 3 }}>
                    {order?.status === "pending" ? (
                      <Box sx={{ color: "#f50057" }}>{order?.status}</Box>
                    ) : (
                      <Box sx={{ color: "#a2cf6e" }}>{order?.status}</Box>
                    )}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      handleOnDelete(order._id);
                    }}
                    size="small"
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default MyOrders;