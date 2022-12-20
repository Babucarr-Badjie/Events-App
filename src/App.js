import { useState } from "react";
import Title from "./Components/Title";
import "./App.css";
import NewEventForm from "./Components/NewEventForm";
import Modal from "./Components/Modal";
import EventList from "./Components/EventList";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addEvent = (event) => {
    setEvents((previousEvents) => {
      return [...previousEvents, event];
    });

    // close the Modal form after the form is sent
    setShowModal(false);
  };

  const handleClickEvent = (id) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return id !== event.id;
      });
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
          <button className="hide-events-btn" onClick={() => setShowEvents(false)}>
            Hide Events
          </button>
        </div>
      )}

      {/* Show events when clicked the "Show Events button" */}
      {!showEvents && (
        <div>
          <button className="show-events-btn" onClick={() => setShowEvents(true)}>
            Show Events
          </button>
        </div>
      )}
      {showEvents && (
        <EventList events={events} handleClickEvent={handleClickEvent} />
      )}
      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div className="add-event">
        <button className="add-new-event-btn" onClick={() => setShowModal(true)}>
          Add New Event
        </button>
      </div>
    </div>
  );
}

export default App;
