import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Role: {userData.role}</p>
    </div>
  );
};

export default Profile;
