import React from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom"
const App = () => {
  return (
    <div>
      Welcome Pages
      <img src={reactLogo} />
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default App;
