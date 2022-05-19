import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aboutus from './Aboutus';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Login/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard'
import Purchase from './Components/Purchase/Purchase';
const App = () => {
  return (
  
    <Box>
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutUs">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/collection">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/products/:productId">
            <Header />
            <Purchase></Purchase>
            <Footer></Footer>
          </PrivateRoute>
          {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>
    </AuthProvider>
  </Box>
);
};

export default App;