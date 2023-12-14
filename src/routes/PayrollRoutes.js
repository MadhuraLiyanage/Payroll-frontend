import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import ForgotPassword from "../components/login/ForgotPassword";
import Home from "../components/home/Home";
import About from "../components/home/About";
import Dashboard from "../components/dashboard/Dashboard";

const PayrollRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="home" element={<Home />}>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="about" element={<About />} />
        </Route>
        <Route exact path="register-me" element={<Register />} />
        <Route exact path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default PayrollRoutes;
