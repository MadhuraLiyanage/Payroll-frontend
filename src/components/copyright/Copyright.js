import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { ThemeProvider } from "@mui/material/styles";
import { myThemeTypography } from "../../Themes/PayrollTheme";

const Copyright = () => {
  return (
    <div>
      <div style={{ marginTop: 40, marginBottom: 4, fontWeight: "bold" }}>
        {process.env.REACT_APP_SYS_NAME
          ? process.env.REACT_APP_SYS_NAME
          : "maddog@madhura.com"}
      </div>
      <ThemeProvider theme={myThemeTypography}>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          // {...props}
        >
          {"Copyright © "}
          <Link color="inherit" href="https://github.com/MadhuraLiyanage">
            Madhura Liyanage
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default Copyright;
