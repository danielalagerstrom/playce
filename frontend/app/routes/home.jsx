import React, { useState } from "react";
import EventCard from "../components/EventCard.jsx";

const sampleHome = [
  {
    id: 1,
    title: "PLAYCE OF THE DAY",
    date: "2025-11-15",
    location: "CAFÉ MELLEMFOLK 💛",
    description: "TODAY: EUROVISION QUIZ AT 20.00",
  },
  {
    id: 2,
    title: "TRENDING RIGHT NOW",
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

export default function Home() {
  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    { id: "events", label: "Playce Events" },
    { id: "venues", label: "Venues" },
    { id: "games", label: "Game Library" },
  ];

  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">HEY SHEYLA 👋</h1>

      {/* Tabs */}
    <div className="tabs-container mb-6 flex justify-center gap-4 border border-[#f7f7f7] p-2 rounded-lg bg-[#090C08]">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      className={`tab-btn px-4 py-2 rounded-md font-medium transition-colors text-[#f7f7f7] ${
        activeTab === tab.id ? "text-yellow-400" : ""
      } hover:text-yellow-400`}
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>

      {/* Content for the active tab */}
      <section className="grid gap-4">
        {activeTab === "events" &&
          sampleHome.map((event) => <EventCard key={event.id} event={event} />)}
        {activeTab === "venues" && <p>Venues content goes here</p>}
        {activeTab === "games" && <p>Game Library content goes here</p>}
      </section>
    </main>
  );
}



