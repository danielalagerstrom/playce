// app/routes/events.jsx
import React from "react";
import EventCard from "../components/EventCard.jsx";

/**
 * Sample events data
 * Replace with dynamic data later if needed
 */
const sampleEvents = [
  {
    id: 1,
    title: "Catan Marathon",
    date: "2025-11-15",
    time: "18:00",
    location: "📍 Skovvejen 10, 1. sal, 8000 Aarhus C",
    description: "Join us for a marathon session of Catan with fellow board game enthusiasts!",
  },
  {
    id: 2,
    title: "Trivia Night",
    date: "2025-11-18",
    time: "19:00",
    location: "📍 Møllehavevej 15, 8200 Aarhus N",
    description: "Test your knowledge with fun trivia questions and meet new people!",
  },
  {
    id: 3,
    title: "Monopoly Evening",
    date: "2025-11-20",
    time: "17:00",
    location: "Playce Game Lounge",
    description: "Compete with friends or strangers in a friendly game of Monopoly.",
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
export default function Events() {
  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h1>

      <section className="grid gap-4">
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}



