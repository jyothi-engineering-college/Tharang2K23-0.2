// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import BackgroundVideo from './BackgroundVideo'; // Import your new BackgroundVideo component
import MyRoutes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundVideo /> {/* Include the BackgroundVideo component */}
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
