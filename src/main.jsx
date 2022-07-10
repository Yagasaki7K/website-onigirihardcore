import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import './index.css'

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)