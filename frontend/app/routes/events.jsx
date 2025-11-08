// events.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import EventCard from "../components/EventCard.jsx";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data);
      }
      setLoading(false);
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading events...</p>;
  }

  if (!events.length) {
    return <p className="text-center mt-8">No events found 😕</p>;
  }

  return (
    <section className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h1>
      <div className="grid gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
