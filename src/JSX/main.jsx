import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AppRoots } from "./roots";
import "/src/CSS/index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoots />
  </StrictMode>
)



