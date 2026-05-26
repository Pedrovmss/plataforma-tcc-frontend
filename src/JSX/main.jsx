import React from "react";
import ReactDOM from "react-dom/client";
import Roots from "./roots.jsx";
import Navbar from "./NavBar";
import "/src/CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Roots />
  </React.StrictMode>
);
