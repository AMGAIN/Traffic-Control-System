import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/auth/admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || "Error fetching admin data");
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default AdminPage;
