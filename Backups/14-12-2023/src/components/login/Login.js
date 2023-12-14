import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MESSAGE_TYPE, MessageBox } from "./../message/MessageBox";
import { EncryptString, DecryptString } from "../../utils/Common";
import Copyright from "../copyright/Copyright";
// import AppContext from "../../context/AppContext";

const defaultTheme = createTheme();

const Login = () => {
  //#region "State Hooks usage"
  const [loginDisabled, setLoginDisabled] = useState(true);

  const [loginData, setLoginData] = useState({
    myEmail: localStorage.getItem("Payroll-Manager-RememberMe-email")
      ? localStorage.getItem("Payroll-Manager-RememberMe-email")
      : "",
    myPassword: localStorage.getItem("Payroll-Manager-RememberMe-password")
      ? DecryptString(
          localStorage.getItem("Payroll-Manager-RememberMe-password")
        )
      : "",
    rememberMe: localStorage.getItem("Payroll-Manager-RememberMe-password")
      ? DecryptString(
          localStorage.getItem("Payroll-Manager-RememberMe-password")
        )
      : ""
  });
  //#endregion "State Hooks usage"

  //#region "Functions"
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.values) {
      console.log({
        email: data.get("email"),
        password: data.get("password")
      });
      RememberMe();
      MessageBox({
        message: "Valid Credentials",
        messageType: MESSAGE_TYPE.SUCCESSFUL
      });
      localStorage.setItem("Payroll-Status", "Y");
      window.location.href = "/home";
    }
  };

  const RememberMe = () => {
    if (loginData.rememberMe) {
      const encPassword = EncryptString(loginData.myPassword);
      localStorage.setItem(
        "Payroll-Manager-RememberMe-email",
        loginData.myEmail
      );
      localStorage.setItem("Payroll-Manager-RememberMe-password", encPassword);
      localStorage.setItem("Payroll-Manager-RememberMe", true);
    } else {
      localStorage.setItem("Payroll-Manager-RememberMe-email", "");
      localStorage.setItem("Payroll-Manager-RememberMe-password", "");
      localStorage.setItem("Payroll-Manager-RememberMe", "");
    }
  };
  //#endregion "Functions"

  //#region  "useEffect hook usage"
  useEffect(() => {
    if (
      loginData.myEmail.length > 0 &&
      loginData.myPassword.length > 0 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.myEmail)
    ) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [loginData]);

  useEffect(() => {
    localStorage.removeItem("Payroll-Status");
  }, []);

  //#endregion "useEffect hook usage"

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              id="frmBox"
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, textAlign: "center" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={loginData.myEmail}
                onChange={(e) => {
                  setLoginData({ ...loginData, myEmail: e.target.value });
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={loginData.myPassword}
                onChange={(e) => {
                  setLoginData({ ...loginData, myPassword: e.target.value });
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={Boolean(loginData.rememberMe)}
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        rememberMe: e.target.checked
                      });
                    }}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loginDisabled}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs style={{ textAlign: "left" }}>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item style={{ textAlign: "right" }}>
                  <Link href="/register-me" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
