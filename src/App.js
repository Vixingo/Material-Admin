import React from "react";
import Dashboard from "./Components/Dashboard";
import Cards from "./Components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cards" element={<Cards />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
