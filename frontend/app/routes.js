import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/layout.jsx", [
    index("routes/home.jsx"),        // Homepage at "/"
    route("events", "routes/events.jsx"), // Events page at "/events"
    route("add", "routes/add.jsx"),       // Add page at "/add"
    route("profile", "routes/profile.jsx"), // Profile page at "/profile"
    route("chat/new", "routes/chat-new.jsx"), // New chat page
    route("chat/:threadId", "routes/chat-thread.jsx"), // Chat thread page
  ]),
];


