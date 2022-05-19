import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const AddProducts = () => {
  const [product, setProduct] = useState({});
  const [success, setSuccess] = useState(false);
  const History = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product };
    newProduct[field] = value;
    console.log(newProduct);
    setProduct(newProduct);
  };

  const handleOnSubmit = (e) => {
    console.log(product);
    // send to database
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          History.push(redirect_uri);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h5">Add A Product</Typography>

      <Box sx={{ my: 4 }}>
        <form onSubmit={handleOnSubmit}>
          <TextField
            label="Product Name"
            sx={{ width: "50%" }}
            type="text"
            id="outlined-size-small"
            size="small"
            name="productName"
            onBlur={handleOnBlur}
          />
          <br />
          <TextField
            label="Price"
            sx={{ width: "50%", my: 3 }}
            type="number"
            id="outlined-size-small"
            size="small"
            name="price"
            onBlur={handleOnBlur}
          />
          <br />
          <TextField
            label="Product Image Url"
            sx={{ width: "50%", mb: 3 }}
            type="text"
            id="outlined-size-small"
            size="small"
            name="picture"
            onBlur={handleOnBlur}
          />
          <br />
          <textarea
            style={{
              width: "50%",
              my: 3,
              paddingLeft: "8px",
              paddingTop: "8px",
              fontSize: "14px",
              fontFamily: "inherit",
              color: "gray",
            }}
            rows="10"
            cols="50"
            name="about"
            placeholder="Enter Your Comment.."
            onBlur={handleOnBlur}
          ></textarea>
          <br />
          <Box sx={{ mb: 3 }}>
            <Button type="submit" variant="contained">
              Add A Product
            </Button>
          </Box>
        </form>
        {success && (
          <Alert sx={{ width: "50%" }} severity="success">
            Product Successfully Added
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default AddProducts;