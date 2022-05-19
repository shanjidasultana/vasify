import { Button, TableRow, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [update]);

  const handleShipping = (id) => {
    console.log(id);
    const url = `http://localhost:5000/order/${id}`;

    const findOrder = orders.find((order) => order._id === id);
    console.log(findOrder);

    if (findOrder.status === "shipped") {
      alert("Product Already Shipped");
    } else {
      findOrder.status = "shipped";
      console.log(findOrder);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(findOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            console.log(data);
            setUpdate(true);
          }
        });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/order/${id}`;
    const proceed = window.confirm("Are You Sure, You Want To Delete ?");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Typography>Manage All Orders</Typography>

      <Box sx={{ my: 3 }}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product Price</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.userName}
                  </TableCell>
                  <TableCell align="center">{order.email}</TableCell>
                  <TableCell align="center">{order.productName}</TableCell>
                  <TableCell align="center">{order.productPrice}</TableCell>
                  <TableCell align="center">{order.time}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        handleShipping(order._id);
                      }}
                      variant="text"
                    >
                      {order.status}
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                      variant="text"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ManageAllOrders;
