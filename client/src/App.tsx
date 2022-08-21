import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/authContext";
import ProtectRoute from "./components/ProtectRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
