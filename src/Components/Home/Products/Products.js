import {
    Button,
    CardActionArea,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import { Box } from "@mui/system";
  import * as React from "react";
  import { Link } from "react-router-dom";
  // import MuiSkeleton from "../../Shared/MuiSkeleton/MuiSkeleton";
  
  const Products = () => {
    const [products, setProducts] = React.useState([]);
    const size = 6;
    React.useEffect(() => {
      setTimeout(() => {
        fetch(
          `http://localhost:5000/products?page=home&size=${size}`
        )
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, 2000);
    }, []);
  
    return (
      <div>
        <Container>
          <Typography variant="h4" sx={{ mt: 4 }}>
            Our Collections
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "3px",
              backgroundColor: "black",
              mb: 4,
              mt: 2,
              borderRadius: 15,
            }}
          ></Box>
          <Box>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.length ? (
                products.map((product, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Card key={product.index} sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          class='items-center '
                          component="img"
                          height="400"
                          // width="250"
                          image={product.picture}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {product.name}
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
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/products/${product._id}`}
                        >
                          <Button
                            size="small"
                            variant="outlined"
                            sx={{ color: "black", borderColor: "black" }}
                          >
                            purchase
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid
                  container
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {/* <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid> */}
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </div>
    );
  };
  
  export default Products;
  