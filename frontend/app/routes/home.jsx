import React from "react";
import { Link } from "react-router";
import EventCard from "../components/EventCard.jsx";

/**
 * Sample home data
 * Replace with dynamic data later if needed
 */
const sampleHome = [
  {
    id: 1,
    title: "PLAYCE OF THE DAY",
    date: "2025-11-15",
    location: "CAFÉ MELLEMFOL 💛",
    description: "TODAY: EUROVISION QUIZ AT 20.00",
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
export default function Home() {
  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">HEY SHEYLA 👋</h1>

      <section className="grid gap-4">
        {sampleHome.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}


