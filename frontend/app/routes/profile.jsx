// profile.jsx
import React from "react";
import { Link } from "react-router";
import EventCard from "../components/EventCard.jsx";

/**
 * Sample profile data
 * Replace with dynamic data later if needed
 */
const sampleHome = [
  {
    id: 1,
    title: "",
    date: "",
    location: "",
    description: "Born in Spain, based in Aarhus. Mission: meet cool people and get to know new games. 🫶🏽 Favorite game: Ticket to Ride",
  },
];

/**
 * Events Page Component
 *
 * Renders a list of events using reusable EventCard components.
 * Key concepts:
 * - Sample data for now (no API)
 * - Reusable component rendering
 * - Semantic HTML with <main> and <section>
 */
export default function Home() {
  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">HEY SHEYLA 👋</h1>

      <section className="grid gap-4">
        {sampleHome.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
       <h2>PERSONAL RECORDS</h2>
       
    </main>
  );
}