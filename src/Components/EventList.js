import React from "react";

export default function EventList({ events, handleClickEvent }) {
  return (
    <div className="my-events">
      {events.map((event) => (
        <div className="event-list">
          <h2>{event.eventTitle}</h2>

          <p className="location-date">
            {event.eventLocation.toUpperCase()} - {event.eventDate}
          </p>
          <button
            className="delete-btn"
            onClick={() => handleClickEvent(event.id)}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
}
