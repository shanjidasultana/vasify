import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner1 from '../../../images/banner5.jpg';
const bannerBg = {
  background: `url(${'https://my-live-05.slatic.net/p/4f31141d05bc2ad622c7dd4503eb413c.jpg_720x720q80.jpg_.webp'})`,
  backgroundPosition:"center center",
  backgroundSize:"cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Banner = () => {
  return (
    <div style={bannerBg}>
      <Container>
        <Grid
          container
          rowSpacing={1}
          style={{ height: "90vh" }}
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={7} style={{ color: "white" }}>
            <Typography variant="h4" sx={{ my: 2 }}>
              The Delicate Vase Shop
            </Typography>
            <Typography variant="h4" sx={{ my: 2 }}>
              Made With <br /> Care
            </Typography>
            <Typography variant="body1">
              Care for tradition, care for material & care for artisans
            </Typography>
            <Button
              variant="outlined"
              sx={{ my: 2, borderColor: "white", color: "white" }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;