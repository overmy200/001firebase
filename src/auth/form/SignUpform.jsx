import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setError("Password should be at least 6 characters");
          break;
        case "auth/email-already-in-use":
          setError("This email is already used.");
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
          <Typography variant="h5">Register</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <TextField
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                required
              />
            </div>
            <div>
              <TextField
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                required
                autoComplete="off"
              />
            </div>
            <div className="grid gap-2">
              <Button type="submit" variant="contained" sx={{p:1.5}}>
                  Register
              </Button>
            </div>
          </form>
          <div className="p-4 box text-center">
            Already have an account <Link to="/login">Log in</Link>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Register;
