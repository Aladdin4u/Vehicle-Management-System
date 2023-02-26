import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AdminForm from "./pages/AdminForm";
import UserForm from "./pages/UserForm";
import AdminDashboard from "./pages/Admin/Dashboard";
import VechicleCategory from "./pages/Admin/VechicleCategory";
import AddVehicle from "./pages/Admin/AddVehicle";
import ManageVechicle from "./pages/Admin/ManageVechicle";
import SearchVechicle from "./pages/Admin/SearchVechicle";
import RegUsers from "./pages/Admin/RegUsers";
import Reports from "./pages/Admin/Reports";
import VechicleList from "./pages/Admin/VehicleList";
import UserDashboard from "./pages/User/Dashboard";
import Vehicle from "./pages/User/Vechicle";
import Layout from "./components/Layout";
import UserLayout from "./components/UserLayout";
import "./index.css";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="/adminlogin" element={<AdminForm />} />
            <Route path="/userlogin" element={<UserForm />} />
            <Route path="/create" element={<Register />} />

            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<VechicleList />} />
              <Route path="category" element={<VechicleCategory />} />
              <Route path="addvehicle" element={<AddVehicle />} />
              <Route path="managevehicle" element={<ManageVechicle />} />
              <Route path="reports" element={<Reports />} />
              <Route path="search" element={<SearchVechicle />} />
              <Route path="regusers" element={<RegUsers />} />
            </Route>
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserDashboard/>} />
              <Route path="view" element={<Vehicle/>} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
