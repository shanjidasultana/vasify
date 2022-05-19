import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  socialIcon: {
    color: "#fff !important",
    border: "1px solid #fff !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "#fff !important",
      color: "#19D3AE !important",
    },
  },
});

const Footer = () => {
  const { socialIcon } = useStyle();
  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List sx={{ mt: 4 }}>
              <Typography className="logo" variant="h5">
                Vaseify Shop
              </Typography>
              <Typography variant="body2">
                2499 Station Street, Oakland, <br /> California, CA
              </Typography>
              <IconButton className={socialIcon}>
                <GoogleIcon />
              </IconButton>
              <IconButton className={socialIcon}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={socialIcon}>
                <InstagramIcon />
              </IconButton>
            </List>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                USEFUL
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/home"
                >
                  Home
                </NavLink>
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/story"
                >
                  Our Story
                </NavLink>
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/shop"
                >
                  Our Shop
                </NavLink>
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                OTHER RESOURCES
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/terms"
                >
                  Terms & Conditions
                </NavLink>
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/policy"
                >
                  Privacy Policy
                </NavLink>
              </ListItemText>
              <ListItemText>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/collection"
                >
                  Collections
                </NavLink>
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                SUBSCRIBE
              </ListItemText>
              <TextField
                sx={{ bgcolor: "white", borderRadius: "5px", mb: 2 }}
                id="outlined-basic"
                label="Name"
                size="small"
                variant="outlined"
              />
              <TextField
                sx={{ bgcolor: "white", borderRadius: "5px", mb: 2 }}
                id="outlined-basic"
                label="Email"
                type="email"
                size="small"
                variant="outlined"
              />
              <br />
              <Button variant="contained">Subscribe</Button>
            </List>
          </Grid>
        </Grid>

        <Divider
          sx={{ width: "90%", margin: "auto", my: 2, backgroundColor: "white" }}
        />
        <Typography variant="subtitle2" sx={{ textAlign: "center", pb: 2 }}>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved By
          Vaseify Shop
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
