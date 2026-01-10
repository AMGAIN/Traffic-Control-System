import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="p-2 no-scrollbar bg-gray-300 min-h-screen">
      <Navbar />
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
