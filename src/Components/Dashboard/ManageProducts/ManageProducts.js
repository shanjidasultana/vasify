import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
import useProducts from "../../../Hooks/useProducts";
  
  const ManageProducts = () => {
    const { products, setProducts } = useProducts();
    console.log(products);
  
    // useEffect(() => {
    //   fetch("https://vast-ravine-32430.herokuapp.com/products/")
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data));
    // }, [product]);
  
    const handleOnDelete = (id) => {
      console.log(id);
      const url = `http://localhost:5000/products/${id}`;
  
      const proceed = window.confirm("Are You Sure, You Want To Delete ?");
      if (proceed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("deleted Successfully");
              const remainingOrders = products.filter(
                (product) => product._id !== id
              );
              setProducts(remainingOrders);
            }
          });
      }
    };
    return (
      <div>
        <Typography variant="h5">Manage Products</Typography>
        <Box>
          <Grid
            container
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.length ? (
              products.map((product, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Card key={product.index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="500"
                        image={product.picture}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.name ? product.name : product.productName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.about.slice(0, 90)}...
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() => handleOnDelete(product._id)}
                        size="small"
                        variant="outlined"
                        sx={{ color: "black", borderColor: "black" }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <div
                style={{
                  height: "100vh",
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            )}
          </Grid>
        </Box>
      </div>
    );
  };
  
  export default ManageProducts;