// Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: "🏠" },
    { label: "Events", path: "/events", icon: "📅" },
    { label: "Add", path: "/add", icon: "➕" },
    { label: "Chats", path: "/chat/new", icon: "💬" },
    { label: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
