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

  {
    id: 2,
    title: "CONNECTIONS",
    date: "0",
    location: "",
    description: "",
  },
  {
    id: 3,
    title: "EVENTS JOINED",
    date: "0",
    location: "",
    description: "",
  },

  {
    id: 4,
    title: "STARTED CHATS",
    date: "0",
    location: "",
    description: "",
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
      <h1 className="text-2xl font-semibold mb-6 text-center">SHEYLA</h1>
      <p>⌛️ 26 yo</p>
      <p>🇪🇸 from Spain</p>

      <section className="grid gap-4">
        {sampleHome.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <h2> EVENTS YOUR ARE HOSTING</h2>
        <p>Nothing planned yet!</p>
       <h2> CONNECTIONS</h2>
        <p>You have no connections yet.</p>
    </main>
  );
}