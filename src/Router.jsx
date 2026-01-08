import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, // The shared layout
    children: [
      { 
        index: true, 
        element: <Home />  // Shows at "/"
      },
      { 
        path: "login", 
        element: <Login /> // Shows at "/login"
      },
    ],
  },
]);