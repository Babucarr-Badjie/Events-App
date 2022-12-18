import { useState } from "react";
import React from "react";

export default function NewEventForm() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("Taipei");

  const event = {
    eventTitle: eventTitle,
    eventDate: eventDate,
    eventLocation: eventLocation,
  };

  return (
    <form>
      <label>
        <span>Event Title</span>
        <input type="text" onChange={(e) => setEventTitle(e.target.value)} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setEventDate(e.target.value)} />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setEventLocation(e.target.value)}>
          <option value="taipei">Taipei</option>
          <option value="taichung">Taichung</option>
          <option value="miaoli">Miaoli</option>
          <option value="taoyuan">Taoyuan</option>
          <option value="kaohsiung">Kaohsiung</option>
          <option value="tainan">Tainan</option>
        </select>
      </label>
      <button className="submit-btn">Submit</button>
    </form>
  );
}
