import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useProducts from "../../Hooks/useProducts";

const Purchase = () => {
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { productId } = useParams();
  const { products } = useProducts();

  const redirect_uri = location.state?.from || "/";

  const singleProduct = products.find((product) => product._id === productId);
  console.log(singleProduct);

  const bannerBg = {
    backgroundImage: `url(${singleProduct?.picture})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const initialInfo = {
    userName: user.displayName,
    email: user.email,

    phone: "",
  };

  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setOrderInfo(newInfo);
  };
  let date = new Date();

  const handleOnSubmit = (e) => {
    const order = {
      ...orderInfo,
      productName: singleProduct?.name,
      productPrice: singleProduct?.price,
      time: date.toLocaleDateString(),
      product: singleProduct,
      status: "pending",
    };
    console.log(order);
    // get data and store in database

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("ordered Successfully Placed");
          history.push(redirect_uri);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Box
        style={{
          ...bannerBg,
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", color: "white" }}>
          {singleProduct?.name}
        </Typography>
      </Box>

      <Container sx={{ my: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={singleProduct?.picture} alt="" width="100%" />
            </Box>
            <Box>
              <img src={singleProduct?.img} alt="" width="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6">{singleProduct?.name}</Typography>
              <Typography variant="body2">{singleProduct?.about}</Typography>
              <Typography variant="h5">{singleProduct?.price}</Typography>
            </Box>

            <Box sx={{ my: 5 }}>
              <form onSubmit={handleOnSubmit}>
                <Typography variant="h5" marginY="10px">
                  Purchase
                </Typography>
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="standard-basic"
                  defaultValue={user?.displayName}
                  label="Name"
                  type="text"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="standard-basic"
                  defaultValue={user?.email}
                  label="Email"
                  type="email"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="standard-basic"
                  label="Product Name"
                  type="text"
                  value={
                    singleProduct?.name
                      ? singleProduct?.name
                      : singleProduct?.productName || ""
                  }
                  name="ProductName"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="standard-basic"
                  type="text"
                  name="ProductPrice"
                  value={singleProduct?.price || ""}
                  onBlur={handleOnBlur}
                  label="Product Price"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="outlined-size-small"
                  name="phone"
                  onBlur={handleOnBlur}
                  type="number"
                  label="Your Number"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "80%", my: 1 }}
                  id="standard-basic"
                  label="Your Address"
                  name="address"
                  onBlur={handleOnBlur}
                  type="text"
                  variant="standard"
                />
                <Button variant="contained" sx={{ my: 1 }} type="submit">
                  Place Order
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Purchase;
