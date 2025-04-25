import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserAuthContextProvider } from "./contexts/UserAuthContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/form/SignInform.jsx";
import Register from "./auth/form/SignUpform.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </StrictMode>
);
