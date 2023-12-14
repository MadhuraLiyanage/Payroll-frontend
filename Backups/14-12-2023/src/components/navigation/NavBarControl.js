import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavBarControl = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);
  useEffect(() => {
    setShowNavBar(
      location.pathname === "/" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/register-me"
        ? false
        : true
    );
  }, [location]);
  return <div>{showNavBar && children}</div>;
};

export default NavBarControl;
