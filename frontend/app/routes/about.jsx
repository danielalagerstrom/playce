import React from "react";

export default function About() {
  return (
    <main className="about-page">
      <h1>About Playce</h1>

      <p>
        Playce is a lightweight chat and thread explorer built to demonstrate
        modern React Router patterns, client-side data loading, and a simple
        conversational UI. It’s intended as an educational playground where you
        can experiment with nested routes, loaders, and actions.
      </p>

      <section>
        <h2>What you can do</h2>
        <ul>
          <li>Browse and manage chat threads.</li>
          <li>Open a thread to view and add messages.</li>
          <li>Learn how React Router v7 handles nested layouts and loaders.</li>
        </ul>
      </section>

      <section>
        <h2>Contact & contribute</h2>
        <p>
          This project is a demo. If you have ideas or improvements,
          contributions and feedback are welcome.
        </p>
      </section>
    </main>
  );
}
