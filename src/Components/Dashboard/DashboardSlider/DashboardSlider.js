import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DashboardSlider = () => {
  const [products, setProducts] = useState([]);
  const size = 6;
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=home&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4">Recommended</Typography>
      <Box
        sx={{
          width: "100px",
          height: "3px",
          // backgroundColor: "black",
          backgroundColor:"green",

          mb: 4,
          mt: 2,
          borderRadius: 15,
        }}
      ></Box>
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid item xs={12} sm={12} md={4}>
            <Box
              key={index}
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 300,
                  height: 300,
                  textAlign: "center",
                  p: 3,
                },
              }}
            >
              <NavLink
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to={`/products/${product._id}`}
              >
                <Paper
                  variant="outlined"
                  square
                  style={{
                    backgroundColor:"black",
                    backgroundImage: `url(${product?.picture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "inherit",
                    backgroundRepeat: "no-repeat",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Price: {product.price}
                  </Typography>
                </Paper>
              </NavLink>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardSlider;