// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthUserProvider } from "./context/AuthUserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
  </React.StrictMode>
);
