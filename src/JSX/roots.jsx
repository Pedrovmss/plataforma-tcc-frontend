import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import App_Login from "./Login";
import App_Cadastro from "./Cadastro";

function Roots() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App_Login />} />
        <Route path="/cadastro" element={<App_Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Roots;