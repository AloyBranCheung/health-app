import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
