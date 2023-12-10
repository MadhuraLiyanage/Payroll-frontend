import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MESSAGE_TYPE, MessageBox } from "./../message/MessageBox";
import Copyright from "../copyright/Copyright";

const defaultTheme = createTheme();

const Register = () => {
  //#region "State Hooks usage"
  const [regDisabled, setRegDisabled] = useState(true);
  const [disabledAllFields, setDisabledAllFields] = useState(false);
  const [formData, setFormData] = useState({
    myEmail: "",
    myFirstName: "",
    myLastName: "",
    myPassword: "",
    myConfirmPassword: ""
  });
  //#endregion "State Hooks usage"

  //#region "Functions"
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    //check the password confirmation
    if (formData.myPassword !== formData.myConfirmPassword) {
      MessageBox({
        message: `Password confirmation does not match. Please try again.`,
        messageType: MESSAGE_TYPE.INFO
      });
      return;
    }

    if (data.values) {
      console.log({
        email: data.get("email"),
        userName: data.get("name"),
        usePassword: data.get("password")
      });

      MessageBox({
        message: `Registration activation link sent to ${formData.myEmail}.`,
        messageType: MESSAGE_TYPE.SUCCESSFUL
      });
      setDisabledAllFields(true);
      setRegDisabled(true);
    }
  };
  //#endregion "Functions"

  //#region  "useEffect hook usage"
  useEffect(() => {
    if (
      formData.myEmail.length > 0 &&
      formData.myFirstName.length > 0 &&
      formData.myLastName.length > 0 &&
      formData.myPassword.length > 0 &&
      formData.myConfirmPassword.length > 0 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.myEmail)
    ) {
      setRegDisabled(false);
    } else {
      setRegDisabled(true);
    }
  }, [
    formData.myEmail,
    formData.myFirstName,
    formData.myLastName,
    formData.myPassword,
    formData.myConfirmPassword
  ]);

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
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
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
                value={formData.myEmail}
                onChange={(e) => {
                  setFormData({ ...formData, myEmail: e.target.value });
                }}
                disabled={disabledAllFields}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="first-Name"
                inputProps={{ maxLength: 50 }}
                value={formData.myFirstName}
                onChange={(e) => {
                  setFormData({ ...formData, myFirstName: e.target.value });
                }}
                disabled={disabledAllFields}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="last-Name"
                inputProps={{ maxLength: 50 }}
                value={formData.myLastName}
                onChange={(e) => {
                  setFormData({ ...formData, myLastName: e.target.value });
                }}
                disabled={disabledAllFields}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.myPassword}
                onChange={(e) => {
                  setFormData({ ...formData, myPassword: e.target.value });
                }}
                disabled={disabledAllFields}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={formData.myConfirmPassword}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    myConfirmPassword: e.target.value
                  });
                }}
                disabled={disabledAllFields}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={regDisabled}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item xs textAlign={"left"}>
                  <Link href="/" variant="body2">
                    Sign in
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

export default Register;
