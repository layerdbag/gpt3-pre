import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'

const div = document.getElementById('root')
const root = createRoot(div)
root.render(<App />)