import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-evenly text-white">
          <div className="flex flex-1 items-center justify-center justify-start">
            <h1 className="font-meduim sm:font-bold uppercase">Vehicle Management System</h1>
          </div>
          <div className="flex flex-1 items-center justify-center space-x-2 sm:space-x-4 justify-end">
            <Button text="Admin" />
            <Button text="User" />
          </div>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
