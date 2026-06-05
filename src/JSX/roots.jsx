import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import App_Login from "./Login";
import App_Cadastro from "./Cadastro";
import BuscarProjetos from "./projetos_busca"
import Erro_body from "./erro_page.jsx";

function Roots() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscarProjetos />} />
        <Route path="/cadastrar_projetos" element={<App />} />
        <Route path="/login" element={<App_Login />} />
        <Route path="/cadastro" element={<App_Cadastro />} />
        <Route path="*" element={<Erro_body />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Roots;
