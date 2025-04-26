import React from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const App = () => {
  return (
    <div>
      <Box
        sx={{
          p: 5,
          borderRadius: 5,
          boxShadow: 5,
          bgcolor: "white",
          justifyItems: "center",
          display: "grid",
          gap: 3,
        }}
      >
        <Typography variant="h5">Welcome Pages</Typography>
        <img src={reactLogo} />
        <Button variant="contained" sx={{width:'100%'}}>
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="contained" sx={{width:'100%'}}>
          <Link to="/register">Register</Link>
        </Button>
      </Box>
    </div>
  );
};

export default App;
