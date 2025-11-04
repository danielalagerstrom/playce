// app/routes/add.jsx
import React, { useState } from "react";

export default function Add() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send data to backend / Supabase
    console.log("New Event:", { title, date, description });

    // Reset form
    setTitle("");
    setDate("");
    setDescription("");
    setSubmitted(true);
  };

  return (
    <div className="add-event-page">
      <h1>Add New Event</h1>
      <div className="event-card">
        <form onSubmit={handleSubmit} className="event-form">
          <label>
            Event Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event title"
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter event description"
              rows={4}
            />
          </label>

          <button type="submit" className="submit-btn">
            Add Event
          </button>

          {submitted && (
            <p className="success-msg">Event successfully added!</p>
          )}
        </form>
      </div>
    </div>
  );
}
