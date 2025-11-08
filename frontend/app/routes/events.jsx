// app/routes/events.jsx
import { useLoaderData } from "react-router";
import EventCard from "../components/EventCard.jsx";

/**
 * CLIENT LOADER FUNCTION
 *
 * Fetches all events from Supabase before rendering the page.
 * Key concepts:
 * 1. DATA LOADING: Uses fetch to get events from Supabase REST API
 * 2. SORTING: Orders events by date ascending
 * 3. ERROR HANDLING: Throws error if request fails
 */
export async function clientLoader() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const url = `${supabaseUrl}/rest/v1/events?select=*&order=date.asc`;

  const response = await fetch(url, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  const events = await response.json();
  return { events };
}

/**
 * Events Page Component
 *
 * Displays all events in a responsive card grid.
 * Key concepts:
 * 1. useLoaderData() hook: Accesses events fetched by clientLoader
 * 2. RESPONSIVE GRID: 1 column mobile, 2 tablet, 3 desktop
 * 3. EventCard: Each event is rendered as a card
 */
export default function Events() {
  const { events } = useLoaderData();

  if (!events || events.length === 0) {
    return <p className="text-center mt-8">No events found 😕</p>;
  }

  return (
    <section className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}




