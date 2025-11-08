// app/routes/layout.jsx
import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar.jsx";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        ←
      </button>

      {/* Main content rendered by routes */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Navbar always visible */}
      <Navbar />
    </div>
  );
}



