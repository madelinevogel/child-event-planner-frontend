export function EventsIndex(props) {
  return (
    <div>
      <h1>All Events</h1>
      {props.events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Location: {event.location}</p>
          <p>Time: {event.start_time}</p>
          <p>Event Type: {event.event_type}</p>
        </div>
      ))}
    </div>
  );
}
