import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import DetailAlert from "./components/DetailAlert";
import Profile from "./pages/Profile";
import AdminPage from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "AlertDetail", element: <DetailAlert /> },

      // Protected routes
      { 
        path: "profile", 
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      { 
        path: "admin", 
        element: (
          <ProtectedRoute adminOnly={true}>
            <AdminPage />
          </ProtectedRoute>
        )
      },
    ],
  },
]);
