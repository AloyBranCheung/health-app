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
import MainDashboard from "./pages/MainDashboard";
import WhatsNews from "./pages/WhatsNew";
import MedicationDashboard from "./pages/MedicationDashboard";
import SearchMD from "./pages/SearchMD";

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
          <Route path="/whatsnew" element={<WhatsNews />} />
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/dashboard/" element={<MainDashboard />} />
            <Route
              path="/dashboard/medication"
              element={<MedicationDashboard />}
            />
            <Route path="/dashboard/find" element={<SearchMD />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
