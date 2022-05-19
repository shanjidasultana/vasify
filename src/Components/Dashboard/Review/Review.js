import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const initialInfo = {
    name: user.displayName,
    email: user.email,
  };

  const [review, setReview] = useState(initialInfo);
  const redirect_uri = location.state?.from || "/home";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newReview = { ...review };
    newReview[field] = value;
    console.log(newReview);
    setReview(newReview);
  };

  const handleSubmit = (e) => {
    console.log(review);
    // get data and store in database

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("ordered Successfully");
          history.push(redirect_uri);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h5">Please Review</Typography>
      <Box sx={{ my: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            sx={{ width: "50%" }}
            type="text"
            id="outlined-size-small"
            defaultValue={user?.displayName}
            size="small"
          />
          <br />
          <TextField
            label="Email"
            sx={{ width: "50%", my: 3 }}
            type="email"
            defaultValue={user?.email}
            id="outlined-size-small"
            size="small"
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
            name="review"
            onBlur={handleOnBlur}
            placeholder="Enter Your Comment.."
          ></textarea>
          <br />
          <TextField
            label="Rate"
            sx={{ width: "50%", my: 3 }}
            type="number"
            id="outlined-size-small"
            size="small"
            name="rate"
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value));
              e.target.value = Math.min(5, parseInt(e.target.value));
            }}
            onBlur={handleOnBlur}
          />
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Review;