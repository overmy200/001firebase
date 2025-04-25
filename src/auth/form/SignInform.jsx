import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
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
      }
    }
  };

  return (
    <>
          <div>
            <h2>Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <button className="bg-blue-500" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="p-4 box mt-3 text-center">
              Don't have an account <Link to="/login">Register</Link>
            </div>
          </div>
        </>
  );
};
export default Login;
