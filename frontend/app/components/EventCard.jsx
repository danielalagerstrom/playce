import React from "react";

/**
 * Event Components
 *
 * This file contains all event-related components for displaying events.
 * It demonstrates:
 * 1. LOGICAL GROUPING: Related components organized in one file
 * 2. COMPONENT HIERARCHY: EventCard -> EventList
 * 3. EXPORT PATTERNS: Multiple named exports for flexible use
 * 4. REUSABLE MODULES: Components can be imported anywhere in the app
 * 5. CLEAN DESIGN: Consistent component structure and code commenting
 */

/**
 * EventCard Component
 *
 * Displays a single event card with title, date, location, and description.
 * Uses PROPS DESTRUCTURING and DEFAULT VALUES for safe and readable code.
 */
function EventCard({
  title = "Untitled Event",
  date = "TBA",
  time = "",
  location = "Unknown location",
  description = "",
  participants = 0,
  image_url = "",
}) {
  return (
    <div className="event-card">
      {image_url && (
        <img src={image_url} alt={title} className="event-card-image" />
      )}
      <div className="event-card-content">
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-date">
          {date} {time && `• ${time}`}
        </p>
        <p className="event-card-location">{location}</p>
        <p className="event-card-description">{description}</p>
        <p className="event-card-participants">
          👥 {participants} attending
        </p>
      </div>
    </div>
  );
}

/**
 * EventList Component
 *
 * Renders a list of event cards based on fetched event data.
 * Uses DEFAULT VALUE [] for safety and prevents rendering errors.
 */
function EventList({ events = [] }) {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            participants={event.participants}
            image_url={event.image_url}
          />
        ))
      ) : (
        <p className="no-events">No events available right now.</p>
      )}
    </div>
  );
}

/**
 * Named Exports
 *
 * We export both components individually so they can be reused or tested separately.
 */
export { EventCard, EventList };
