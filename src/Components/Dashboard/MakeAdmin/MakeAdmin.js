import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h5">Make Admin</Typography>

      <Box>
        <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
          <TextField
            label="Email"
            sx={{ width: "50%", my: 3 }}
            type="email"
            id="outlined-size-small"
            size="small"
            onBlur={handleOnBlur}
          />
          <br />
          <Button type="submit" variant="contained">
            Make A Admin
          </Button>
        </form>
        {success && (
          <Alert sx={{ width: "50%" }} severity="success">
            Made Admin Successfully
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default MakeAdmin;