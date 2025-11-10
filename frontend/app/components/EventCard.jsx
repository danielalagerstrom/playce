import React from "react";

/**
 * EventCard Component
 *
 * Reusable card for displaying an event.
 * Includes:
 * - Title, date/time, location, description
 * - Styled card with padding, shadow, rounded corners
 */
function EventCard({
  event = {
    title: "Event Title",
    date: "Date not set",
    time: "Event Time",
    location: "",
    description: "Event description goes here...",
  },
}) {
  return (
    <div className="event-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* Event Info */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="event-title text-lg font-semibold">{event.title}</h2>
        <p className="event-date-time text-sm text-gray-600">
          {event.date} {event.time && `• ${event.time}`}
        </p>
        {event.location && (
          <p className="event-location text-sm text-gray-500">{event.location}</p>
        )}
        <p className="event-description text-sm text-gray-700">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default EventCard;


