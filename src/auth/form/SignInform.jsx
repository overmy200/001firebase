import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setError("Password should be at least 6 characters");
          break;
        case "auth/invalid-credential":
          setError("Email or password is invalid");
          break;
        default:
          setError(error.message);
          break;
      }
    }
  };

  return (
    <>
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
          <Typography variant="h5">Login</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <TextField
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <TextField
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="grid gap-2">
              <Button type="submit" variant="contained" sx={{p:1.5}}>
                Login
              </Button>
            </div>
          </form>
          <div className="p-4 box mt-3 text-center">
            Don't have an account <Link to="/register">Register</Link>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Login;
