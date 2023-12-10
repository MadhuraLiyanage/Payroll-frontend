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

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/MadhuraLiyanage">
        Madhura Liyanage
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const defaultTheme = createTheme();

const Login = () => {
  //#region "State Hooks usage"
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [myEmail, setMyEmail] = useState(
    localStorage.getItem("Payroll-Manager-RememberMe-email")
      ? localStorage.getItem("Payroll-Manager-RememberMe-email")
      : ""
  );
  const [myPassword, setMyPassword] = useState(
    localStorage.getItem("Payroll-Manager-RememberMe-password")
      ? DecryptString(
          localStorage.getItem("Payroll-Manager-RememberMe-password")
        )
      : ""
  );

  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("Payroll-Manager-RememberMe")
      ? localStorage.getItem("Payroll-Manager-RememberMe")
      : false
  );
  //#endregion "State Hooks usage"

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.values) {
      console.log({
        email: myEmail,
        password: myPassword
      });
      RememberMe();
      MessageBox({
        message: "Valid Credentials",
        messageType: MESSAGE_TYPE.SUCCESSFUL
      });
    }
  };

  const RememberMe = () => {
    if (rememberMe) {
      const encPassword = EncryptString(myPassword);
      localStorage.setItem("Payroll-Manager-RememberMe-email", myEmail);
      localStorage.setItem("Payroll-Manager-RememberMe-password", encPassword);
      localStorage.setItem("Payroll-Manager-RememberMe", true);
    } else {
      localStorage.setItem("Payroll-Manager-RememberMe-email", "");
      localStorage.setItem("Payroll-Manager-RememberMe-password", "");
      localStorage.setItem("Payroll-Manager-RememberMe", "");
    }
  };

  //#region  "useEffect hook usage"
  useEffect(() => {
    if (
      myEmail.length > 0 &&
      myPassword.length > 0 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(myEmail)
    ) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [myEmail, myPassword]);
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
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={myEmail}
                onChange={(e) => {
                  setMyEmail(e.target.value);
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
                value={myPassword}
                onChange={(e) => {
                  setMyPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={Boolean(rememberMe)}
                    onChange={(e) => {
                      setRememberMe(e.target.checked);
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
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
