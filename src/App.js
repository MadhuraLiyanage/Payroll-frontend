import React from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";
import PayrollRoutes from "./routes/PayrollRoutes";
function App() {
  return (
    <div className="App">
      <SnackbarProvider autoHideDuration={5000} maxSnack={10}>
        <PayrollRoutes />
      </SnackbarProvider>
    </div>
  );
}

export default App;
