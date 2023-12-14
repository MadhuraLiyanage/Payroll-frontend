// import React from "react";
//import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const myThemeTypography = () => {
  return createTheme({
    typography: {
      fontSize: 11,
      fontWeightBold: 5000
    }
  });
};

export { myThemeTypography };
