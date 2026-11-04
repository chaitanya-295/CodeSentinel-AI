import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AuthContext";
import TopHeader from "./components/common/TopHeader";

function App() {
  const location = useLocation();
  const { user, loading } = useAuth();

  console.log("APP AUTH:", {
    user,
    loading
  });

  const isAppRoute = location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/profile");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">

          <div className="w-10 h-10 rounded-full border-4 border-slate-700 border-t-cyan-400 animate-spin" />

          <p className="text-slate-400 text-sm">
            Loading CodeSentinel...
          </p>
        </div>
      </div>
    );
  }

  if (isAppRoute && !user) {
    return (

      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  if ((location.pathname === "/login" || location.pathname === "/signup") && user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      {isAppRoute ? (
        <div className="h-screen flex flex-col overflow-hidden">
          <TopHeader />
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />

              {/* Protected Routes */}
              <Route path="/profile" element={<Profile />} />

              {/* Unknown route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;