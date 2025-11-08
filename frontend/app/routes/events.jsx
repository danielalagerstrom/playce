import React from "react";
import EventCard from "../components/EventCard.jsx";

/**
 * CLIENT LOADER FUNCTION
 *
 * Fetches all upcoming events from Supabase before rendering.
 * Key concepts:
 * 1. DATA LOADING: Runs before the component renders
 * 2. SUPABASE REST API: Uses HTTP fetch requests instead of supabase client
 * 3. ENVIRONMENT VARIABLES: Securely load API credentials
 * 4. SORTING: Orders events by date ascending
 * 5. ERROR HANDLING: Gracefully handles failed requests
 *
 * The loader runs:
 * - On initial page load
 * - When navigating to /events
 * - When React Router revalidates
 */
export async function clientLoader() {
  // Get Supabase credentials from environment variables
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Construct API request
  const url = `${supabaseUrl}/rest/v1/events?select=*&order=date.asc`;

  // Fetch data
  const response = await fetch(url, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  // Error handling
  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  const events = await response.json();
  return { events };
}

/**
 * Events Page Component
 *
 * Displays a list of upcoming events.
 * Key concepts:
 * 1. useLoaderData(): Accesses pre-fetched data
 * 2. COMPONENT COMPOSITION: Uses EventCard for reusable UI
 * 3. CONDITIONAL RENDERING: Handles empty and loading states
 * 4. ACCESSIBLE STRUCTURE: Semantic HTML for sections and headings
 */
import { useLoaderData } from "react-router";

export default function Events() {
  // Access loaded event data
  const { events } = useLoaderData();

  // Handle no results
  if (!events?.length) {
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

