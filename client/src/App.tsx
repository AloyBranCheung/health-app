import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// contexts
import { AuthContextProvider } from "./context/authContext";
import { ModalContextProvider } from "./context/modalContext";
// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import ProtectRoute from "./components/ProtectRoute";
import MainDashboard from "./pages/MainDashboard";
import WhatsNews from "./pages/WhatsNew";
import PrescriptionDashboard from "./pages/PrescriptionDashboard";
import SearchMD from "./pages/SearchMD";
import MyHealth from "./pages/MyHealth";
import Results from "./pages/Results";
import Messages from "./pages/Messages";

//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ModalContextProvider>
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
                <Route path="/dashboard/myhealth" element={<MyHealth />} />
                <Route
                  path="/dashboard/medication"
                  element={<PrescriptionDashboard />}
                />
                <Route path="/dashboard/results" element={<Results />} />
                <Route path="/dashboard/find" element={<SearchMD />} />
                <Route path="/dashboard/messages" element={<Messages />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
