import React, { useState } from 'react';
import register from '../../../images/banner4.png'
import { Alert, Button, CircularProgress, Container, Grid, Snackbar, TextField,Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
    const {registerUser,isLoading}=useAuth();
    const history=useHistory()
    const [userData,setUserData]=useState({})
    const [success,setSuccess]=useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      };

        const handleChange=e=>{
            const textField=e.target.name;
            const inputValue=e.target.value;
            const newData={...userData};
            newData[textField]=inputValue;
            setUserData(newData);
        }
        const handleFormSubmit=e=>{
            if(userData.password!==userData.passwordRecheck){
                alert('Your password did not match')
                
            }
            registerUser(userData.email,userData.password,userData.name,history)
            e.preventDefault();
              setSuccess(true);  

        }

        return (
           <Container sx={{my:9,bgcolor:'#c8e6c9'}}>
               
               <Grid container spacing={2}>
               
                    <Grid item xs={12} md={6} sx={{mx:'auto',}}>
                       <form onSubmit={handleFormSubmit}>
                       <Typography variant="h4" sx={{fontFamily:"italic",fontWeight:'bold'}} gutterBottom component="div">
                        REGISTER  
                        </Typography>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Name"
                                variant="standard"
                                color="warning"
                                name="name"
                                onChange={handleChange}
                                />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Email"
                                type="email"
                                variant="standard"
                                color="warning"
                                name="email"
                                onChange={handleChange}
                                />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Password"
                                type="password"
                                variant="standard"
                                name="password"
                                color="warning"
                                onChange={handleChange}
                                />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                                id="standard-search"
                                label="Re-Enter Password"
                                type="password"
                                variant="standard"
                                name="passwordRecheck"
                                color="warning"
                                onChange={handleChange}
                                /><br/><br/>
                            <Button  variant="contained" type="submit" sx={{ width: '75%', m: 1,bgcolor:"#607d8b",p:2}}>Register Now</Button>    
                            {isLoading && <CircularProgress/>}
                            {success&& <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Register Successfully!
                                </Alert>
                            </Snackbar>}

                            <NavLink to="/login"  style={{textDecoration:"none"}}><Button sx={{color:'#607d8b',fontWeight:"bold",my:4}}>Already Register ? Please Login</Button></NavLink>
                            </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={register} width='520' alt="" />
                    </Grid>
                </Grid>
           </Container>
    );
};

export default Register;
