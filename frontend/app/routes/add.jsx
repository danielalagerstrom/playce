// app/routes/add.jsx
import { Form, useActionData } from "react-router";

// CLIENT ACTION: handle POST to Supabase
export async function clientAction({ request }) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const formData = await request.formData();
  const title = formData.get("title");
  const date = formData.get("date");
  const description = formData.get("description");

  if (!title || !date) {
    return { error: "Title and date are required" };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/events`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ title, date, description }),
    });

    if (!response.ok) {
      return { error: `Failed to add event: ${response.status}` };
    }

    const [event] = await response.json();
    return { success: true, event };
  } catch (error) {
    return { error: error.message };
  }
}

// COMPONENT
export default function Add() {
  const actionData = useActionData();

  return (
    <div className="add-event-page">
      <h1>Add New Event</h1>
      <Form method="post" className="event-form">
        <label>
          Event Title:
          <input type="text" name="title" placeholder="Enter event title" required />
        </label>

        <label>
          Date:
          <input type="date" name="date" required />
        </label>

        <label>
          Description:
          <textarea name="description" placeholder="Enter event description" rows={4} />
        </label>

        <button type="submit" className="submit-btn">Add Event</button>

        {actionData?.success && <p className="success-msg">Event successfully added!</p>}
        {actionData?.error && <p className="error-msg">{actionData.error}</p>}
      </Form>
    </div>
  );
}


