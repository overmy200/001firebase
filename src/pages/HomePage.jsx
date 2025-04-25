import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
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
        <h2>Welcome to HomePages</h2>
        <p>Hi, Mr.{user?.email}</p>
        <button onClick={handleLogOut} className="text-white bg-red-500">Log out</button>
      </div>
    </>
  );
};
export default HomePage;
