import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import DetailAlert from "./components/DetailAlert";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The shared layout
    children: [
      { 
        index: true, 
        element: <Home />  // Shows at "/"
      },
      { 
        path: "login", 
        element: <Login /> // Shows at "/login"
      },
      { 
        path: "AlertDetail", 
        element: <DetailAlert/> // Shows for "Specific Alert Details"
      },
    ],
  },
]);