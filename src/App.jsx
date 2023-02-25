import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import UserForm from "./pages/UserForm";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import "./index.css";
import "./style.css";
import VechicleList from "./pages/VehicleList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminForm />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/user" element={<UserForm />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          {/* <Route path="/vehiclelist" element={<VechicleList />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
