import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const HomePage = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <Box sx={{p:5,borderRadius:5,boxShadow:5,bgcolor:"white",display:"grid",gap:5}}>
          <Typography variant="h5">Welcome to HomePages</Typography>
          <Typography variant="h6" sx={{color:"gray"}}>Hi, Mr.{user?.email}</Typography>
          <Button onClick={handleLogOut} variant="contained" sx={{bgcolor:"red",p:1.5}}>
            Log out
          </Button>
        </Box>
      </div>
    </>
  );
};
export default HomePage;
