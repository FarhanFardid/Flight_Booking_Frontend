import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./providers/Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider/AuthContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
