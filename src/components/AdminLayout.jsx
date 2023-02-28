import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;
