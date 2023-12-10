import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider autoHideDuration={5000} maxSnack={10}>
        <Login />
      </SnackbarProvider>
    </div>
  );
}

export default App;
