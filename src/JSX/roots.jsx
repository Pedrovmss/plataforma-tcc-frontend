import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App_Login from "./Login"
import App_Cadastro from "./Cadastro";

export function AppRoots(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/src/HTML/Login.html" element={<App_Login />} />
                <Route path="/src/HTML/Cadastro.html" element={<App_Cadastro />} />
                {/* <Route path="/index.html" element={<App />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
