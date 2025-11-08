import React from "react";

/**
 * EventCard Component
 *
 * Reusable card for displaying an event.
 * Key concepts:
 * 1. DESTRUCTURING: Extracts event properties directly
 * 2. DEFAULT VALUES: Provides fallback if any property is missing
 * 3. REUSABLE: Can be used anywhere an event card is needed
 * 4. STYLING: Rounded corners, black background, yellow drop shadow
 */
function EventCard({
  event = {
    title: "Event Title",
    date: "Date not set",
    time: "Time not set",
    location: "Location not set",
    description: "Event description goes here...",
  },
}) {
  return (
    <div className="event-card">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-date-time">{event.date} • {event.time}</p>
      <p className="event-location">{event.location}</p>
      <p className="event-description">{event.description}</p>
    </div>
  );
}

export default EventCard;
