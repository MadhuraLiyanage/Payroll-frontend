import React from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";
import PayrollRoutes from "./routes/PayrollRoutes";

const App = () => {
  return (
    <div className="w-full h-screen bg-back object-cover flex items-center">
      <SnackbarProvider autoHideDuration={5000} maxSnack={10}>
        <PayrollRoutes />
      </SnackbarProvider>
    </div>
  );
};

export default App;
