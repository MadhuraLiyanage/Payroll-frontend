import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import ForgotPassword from "../components/login/ForgotPassword";
const PayrollRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register-me" element={<Register />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </div>
  );
};

export default PayrollRoutes;
