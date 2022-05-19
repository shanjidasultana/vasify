import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import aboutus from '../src/images/banner2.jpg';
import Header from '../src/Components/Shared/Header/Header';
import Footer from '../src/Components/Shared/Footer/Footer';
import banner from './images/banner6.jpg';
const bannerBg = {
  background:`url('${aboutus}')`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: " no-repeat",
  width: "100%",
  "&:hover": {
    background: "#19D3AE !important",
    color: "#fff !important",
  },
};

const Aboutus = () => {
  return (
    <div>
      <Header></Header>
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
          About Us
        </Typography>
      </Box>

      <Box sx={{  my: 12 }}>
        <Container  sx={{mb:12}}> 
          <Grid
           
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
             <img src={banner} alt="" height={500} width={500}/>

            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ my: 1 }}>
                Our Story
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: 1 }}>
              vasify-shop was founded in Vancouver. Our offices are based in Canada and the USA. Our vision at vasify is to bring serenity indoors.
             We curate timeliness, minimal, and earthy pieces to make your home feel like an extension of your expression.
              </Typography>
              <Typography variant="body1" sx={{ my: 1 }}>
              Whether you gravitate to coastal chic, scandanavian, modern, or beach chic, – here we blur the lines. We blend and draw inspiration from all corners of the earth and mother natures materials to curate a fusion. Our hope is to harvest a collective that finds their sense of home through elysian.
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
              better products, better quality.
              </Typography>
              <Typography variant="body1" sx={{ my: 1 }}>
              We deliver high-end artificial plants, art prints, home accessories and decor, much of which is designed or carefully curated from Vancouver. We are passionate about design but even more obsessed with quality.  Therefore, we offer a one-year warranty on everything we create because we're that confident in what we do. 
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
              Be direct, be better.
              </Typography>
              <Typography variant="body1" sx={{ my: 1 }}>
              At vaseify, we love to do things differently. We’ve created our own process to avoid heavy costs and operations – eliminating middlemen, luxurious shops and big warehouses. This allows us to be more efficient as a company at delivering premium products at unbeatable value and we're happy to pass the savings on to you.
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                We're here to make your home a space you'll adore. <br /> Join the vseify community and stay inspired.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Aboutus;