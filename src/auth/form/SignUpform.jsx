import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
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
          setError("This email is already used.")
      }
    }
  };

  return (
    <>
      <div>
        <h2>Register</h2>
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
              SignUp
            </button>
          </div>
        </form>
        <div className="p-4 box mt-3 text-center">
          Already have an account <Link to="/login">Log in</Link>
        </div>
      </div>
    </>
  );
};
export default Register;
