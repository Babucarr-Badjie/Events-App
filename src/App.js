import { useState } from "react";
import Title from "./Components/Title";
import "./App.css";
import NewEventForm from "./Components/NewEventForm";
import Modal from "./Components/Modal";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addEvent = (event) => {
    setEvents((previousEvent) => {
      return [...previousEvent, event];
    });
  };

  return (
    <div className="App">
      <Title
        mainHeading="My Diary"
        heading="Upcoming Events"
        subHeading="List of Events"
      />
      {/* Hide events when clicked the "Hide Events button" */}
      {showEvents && (
        <div>
          <button className="hide-events" onClick={() => setShowEvents(false)}>
            Hide Events
          </button>
        </div>
      )}

      {/* Show events when clicked the "Show Events button" */}
      {!showEvents && (
        <div>
          <button className="show-events" onClick={() => setShowEvents(true)}>
            Show Events
          </button>
        </div>
      )}
      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div className="add-event">
        <button className="add-event-btn" onClick={() => setShowModal(true)}>
          Add New Event
        </button>
      </div>
    </div>
  );
}

export default App;
