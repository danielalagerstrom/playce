// app/routes/layout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

export default function Layout() {
  return (
    <div className="app-layout">
      {/* Main content rendered by routes */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Navbar always visible */}
      <Navbar />
    </div>
  );
}


