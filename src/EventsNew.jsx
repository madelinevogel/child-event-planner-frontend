export function EventsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("child_id", props.childId);
    props.onCreateEvent(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Start Time: <input name="start_time" type="text" />
        </div>
        <div>
          Event Type: <input name="event_type" type="text" />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
