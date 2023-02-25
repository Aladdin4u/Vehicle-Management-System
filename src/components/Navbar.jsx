import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="flex flex-1 p-4 items-center justify-between">
            <h1 className="font-bold uppercase text-white">Vehicle Management System</h1>
          <div className=" space-x-2 sm:space-x-4">
            <Link to="/adminlogin" className="bg-green-500 hover:bg-green-700 text-white rounded px-4 py-2">Admin</Link>
            <Link to="/userlogin"className="bg-green-500 hover:bg-green-700 text-white rounded px-4 py-2">User</Link>
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
