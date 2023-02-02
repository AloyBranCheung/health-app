import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import track from "react-tracking";
import LogRocket from "logrocket";
// trpc
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc";
// contexts
import { AuthContextProvider } from "./context/authContext";
import { ModalContextProvider } from "./context/modalContext";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// react-query
const queryClient = new QueryClient();
LogRocket.init("zrcdeu/health-app-tracking");
// trpc
const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: `${process.env.REACT_APP_BACKEND_URL}/trpc` })],
});

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthContextProvider>
          <ModalContextProvider>
            <div>
              <ToastContainer />
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
            </div>
          </ModalContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default track(
  { app: "health-app name" },
  {
    dispatch: (data) => {
      console.log(data);
    },
  }
)(App);
