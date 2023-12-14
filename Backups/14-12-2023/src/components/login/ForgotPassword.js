import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MESSAGE_TYPE, MessageBox } from "./../message/MessageBox";
import Copyright from "../copyright/Copyright";

const defaultTheme = createTheme();

const ForgotPassword = () => {
  //#region "State Hooks usage"
  const [resetDisabled, setResetDisabled] = useState(true);
  const [myEmail, setMyEmail] = useState("");
  const [disabledAll, setDisabledAll] = useState(false);
  //#endregion "State Hooks usage"

  //#region "Functions"
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.values) {
      console.log({
        email: data.get("email")
      });

      MessageBox({
        message: `Password reset link sent to ${data.get("email")}.`,
        messageType: MESSAGE_TYPE.SUCCESSFUL
      });

      setDisabledAll(true);
      setResetDisabled(true);
    }
  };
  //#endregion "Functions"

  //#region  "useEffect hook usage"
  useEffect(() => {
    if (
      myEmail.length > 0 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(myEmail)
    ) {
      setResetDisabled(false);
    } else {
      setResetDisabled(true);
    }
  }, [myEmail]);
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
              <MailOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
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
                disabled={disabledAll}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={resetDisabled}
              >
                Send Password Reset URL
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

export default ForgotPassword;
