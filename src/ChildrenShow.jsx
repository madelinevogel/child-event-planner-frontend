import { EventsNew } from "./EventsNew";
import { format, compareAsc } from "date-fns";

export function ChildrenShow(props) {
  return (
    <div>
      <h1>Child Information</h1>
      <p>Name: {props.child.name}</p>
      <p>Photo: {props.child.image}</p>
      <div>
        {props.child.events?.map((event) => (
          <div key={event.id}>
            <p>{event.name}</p>
            <p>{event.location}</p>
            <p>{event.start_time}</p>
            <p>{event.event_type}</p>
          </div>
        ))}
      </div>
      <EventsNew onCreateEvent={props.onCreateEvent} childId={props.child.id} />
    </div>
  );
}
