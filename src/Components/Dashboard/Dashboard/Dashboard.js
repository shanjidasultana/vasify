import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, ListItemIcon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProducts from "../AddProduct/AddProducts";
import AllDetails from "../AllDetails/Alldetails";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
const drawerWidth = 200;

function Dashboard(props) {
  const { user, logOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ color: "white" }}>
        <Typography variant="h6" noWrap className="logo" component="div">
          Vaseify Shop
        </Typography>
      </Toolbar>
      <Divider />
      <Box>
        <List>
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {!admin && (
            <Box>
              <Link
                to={`${url}/pay`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Pay" />
                </ListItem>
              </Link>

              <Link
                to={`${url}/myOrders`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="My Orders" />
                </ListItem>
              </Link>

              <Link
                to={`${url}/review`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Review" />
                </ListItem>
              </Link>
            </Box>
          )}
          <Divider />

          {admin && (
            <Box>
              <Link
                to={`${url}/manageOrders`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Manage All Orders" />
                </ListItem>
              </Link>

              <Link
                to={`${url}/addProducts`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Add A Product" />
                </ListItem>
              </Link>

              <Link
                to={`${url}/makeAdmin`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Make Admin" />
                </ListItem>
              </Link>

              <Link
                to={`${url}/manageProducts`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <ListItem button>
                  <ListItemText primary="Manage Products" />
                </ListItem>
              </Link>
            </Box>
          )}
          <Divider />
          {!admin && (
            <Box
              sx={{
                height: "350px",
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{ my: 3, color: "white" }}
                onClick={logOut}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "white", mx: 1 }} />
                  <ListItemText sx={{ color: "white" }} primary="Logout" />
                </ListItemIcon>
              </Button>
            </Box>
          )}
          {admin && (
            <Box
              sx={{
                height: "300px",
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{ my: 3, color: "white" }}
                onClick={logOut}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "white", mx: 1 }} />
                  <ListItemText sx={{ color: "white" }} primary="Logout" />
                </ListItemIcon>
              </Button>
            </Box>
          )}
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Typography variant="body1" noWrap component="div">
              {user?.displayName}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "black",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Welcome To Dashboard
            </Typography>
            <Box>
              {!admin ? (
                <Container>
                  <DashboardSlider></DashboardSlider>
                </Container>
              ) : (
                <AllDetails></AllDetails>
              )}
            </Box>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;