// app/routes/events.jsx
import { useLoaderData } from "react-router";
import { EventCard } from "../components/EventCard.jsx";

/**
 * CLIENT LOADER FUNCTION
 *
 * Fetches all upcoming events from Supabase before the route renders.
 * Key concepts:
 * 1. ROUTE-LEVEL DATA LOADING: Runs before component renders
 * 2. SUPABASE REST API: Direct fetch using environment variables
 * 3. SECURE KEYS: Uses anon key and URL from .env
 * 4. SORTING: Orders events by date (ascending)
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
 * Displays a list of upcoming events fetched from Supabase.
 * Key concepts:
 * 1. useLoaderData(): Retrieves data from the clientLoader
 * 2. SEPARATION OF CONCERNS: Loader handles fetching, component handles rendering
 * 3. REUSABLE COMPONENTS: Uses EventCard for each event item
 */
export default function Events() {
  const { events } = useLoaderData();

  if (!events || events.length === 0) {
    return (
      <section className="px-4 py-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <p>No events found 😕</p>
      </section>
    );
  }

  return (
    <section className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Upcoming Events
      </h1>

      <div className="grid gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
