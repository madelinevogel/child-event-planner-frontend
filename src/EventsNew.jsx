import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function EventsNew(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      name: name,
      location: location,
      start_time: startDate,
      event_type: eventType,
      child_id: props.childId,
    };
    props.onCreateEvent(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          Location: <input value={location} type="text" onChange={(event) => setLocation(event.target.value)} />
        </div>
        <div>
          Start Time:{" "}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
          />
        </div>
        <div>
          Event Type: <input value={eventType} type="text" onChange={(event) => setEventType(event.target.value)} />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
