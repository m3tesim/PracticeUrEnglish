import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScoreResult from "./components/scoreResult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/result" element={<ScoreResult/>}/>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
