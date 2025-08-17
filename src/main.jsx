// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthUserProvider } from "./context/AuthUserContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from './routes';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
      <RouterProvider router={router}>
       <App />
       </RouterProvider>
    </React.StrictMode>
);
