import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Button, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Pay = () => {
  const { user } = useAuth();

  const handleOnSubmit = (e) => {
    alert("This Page Under maintain by Developer");
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Please Pay Your Order
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <TextField
          label="Name"
          sx={{ width: "50%" }}
          type="text"
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
        />
        <br />
        <TextField
          label="Email"
          sx={{ width: "50%", my: 3 }}
          type="email"
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
        />
        <br />
        <TextField
          label="Product Name"
          sx={{ width: "50%" }}
          type="text"
          id="outlined-size-small"
          defaultValue="Home Decor beautiful vase"
          size="small"
        />
        <Box sx={{ my: 3 }}>
          <FormLabel component="legend">Pay With</FormLabel>
          <RadioGroup row aria-label="pay" name="row-radio-buttons-group">
            <FormControlLabel
              value="Credit Card"
              control={
                <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
                  <Radio /> <CreditCardIcon />
                </Box>
              }
              label="Credit Card"
            />

            <FormControlLabel
              value="Paypal"
              control={
                <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
                  <Radio />
                  <PaymentsIcon />
                </Box>
              }
              label="Paypal"
            />
          </RadioGroup>
        </Box>
        <TextField
          label="Card Number"
          sx={{ width: "50%" }}
          type="number"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <br />
        <Box>
          <TextField
            // label="MM/YY"
            sx={{ width: "24%", my: 3 }}
            type="date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
          />
          <TextField
            label="CVC"
            sx={{ width: "24%", my: 3, ml: 2 }}
            type="number"
            id="outlined-size-small"
            defaultValue=""
            size="small"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Your Shipping Charge <strong>$100</strong>
          </Typography>
          <Button variant="contained">Pay</Button>
        </Box>
      </form>
    </div>
  );
};

export default Pay;