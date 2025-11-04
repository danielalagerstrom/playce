import React from "react";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
        <h1>Welcome back to Playce 🎲</h1>
        <p>Discover, connect, and play your way through Aarhus!</p>
      </header>

      <section className="section">
        <h2>Playce of the Day 🌟</h2>
        <div className="card">
          <h3>Pub Quiz at Tir Na Nóg</h3>
          <p>Join tonight at 19:00 — test your brain and meet new players!</p>
        </div>
      </section>

      <section className="section">
        <h2>Trending Right Now 🔥</h2>
        <ul className="trending-list">
          <li>🎯 Darts & Drinks — Aarhus Ø</li>
          <li>🎬 Movie & Board Games Night</li>
          <li>🧩 Escape Room Challenge</li>
        </ul>
      </section>

      <section className="section">
        <h2>Your Connections Are Attending 🤝</h2>
        <p>3 of your friends are joining “Trivia Tuesday”!</p>
      </section>

      <section className="section">
        <h2>Your Plans 📅</h2>
        <p>
          You don’t have anything planned yet... <br />
          <Link to="/events" className="cta-btn">
            Explore Events
          </Link>
        </p>
      </section>
    </main>
  );
}

