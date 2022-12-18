import React from "react";

export default function EventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <h2>{event.eventTitle}</h2>
      ))}
    </div>
  );
}
