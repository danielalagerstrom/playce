// homepage.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home-page">
      <section className="playce-of-the-day">
        <h1>Playce of the day</h1>
        <p>Discover the hidden gem happening today! 🌻</p>
      </section>

      <section className="trending-now">
        <h1>Trending right now</h1>
        <p>See what everyone is joining. 🔥</p>
      </section>

      <section className="connections-attending">
        <h1>Your connections are attending...</h1>
        <p>Join them and make new friends! 🎉</p>
      </section>
    </div>
  );
}
