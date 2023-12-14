import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import ForgotPassword from "../components/login/ForgotPassword";
import Home from "../components/home/Home";
import About from "../components/home/About";
import Dashboard from "../components/dashboard/Dashboard";
import NavBarControl from "../components/navigation/NavBarControl";
//import TopNavBar from "../components/navigation/ToNavBar";
import NavBar from "../components/navigation/NavBar";

const PayrollRoutes = () => {
  return (
    <div>
      <Router>
        {/* <NavBarControl>
          <NavBar />
        </NavBarControl> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="register-me" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default PayrollRoutes;
