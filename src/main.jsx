import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router";
// import Navbar from './components/Navbar'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(<Router />);
