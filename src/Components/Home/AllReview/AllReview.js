import { Container, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./AllReview.css";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="overFlow" sx={{ my: 5 }}>
      <Typography variant="h4"> Reviews </Typography>
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
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 300,
                textAlign: "center",
                p: 3,
              },
            }}
          >
            <Paper variant="outlined" square>
              <Typography variant="body1">{review.review}</Typography>
              <h4>{review.name}</h4>
              <Rating name="read-only" value={review.rate} readOnly />
            </Paper>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default AllReview;
