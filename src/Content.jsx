import axios from "axios";
import { useState, useEffect } from "react";
import { ChildrenIndex } from "./ChildrenIndex";
import { ChildrenNew } from "./ChildrenNew";
import { EventsNew } from "./EventsNew";

export function Content() {
  const [children, setChildren] = useState([]);

  const handleIndexChildren = () => {
    console.log("handleIndexChildren");
    axios.get("http://localhost:3000/children.json").then((response) => {
      console.log(response.data);
      setChildren(response.data);
    });
  };

  const handleCreateChild = (params, successCallback) => {
    console.log("handleCreateChild", params);
    axios.post("http://localhost:3000/children.json", params).then((response) => {
      setChildren([...children, response.data]);
      successCallback();
    });
  };

  const handleCreateEvent = (params, successCallback) => {
    console.log("handleCreateEvent", params);
    axios.post("http://localhost:3000/event.json", params).then((response) => {
      setEvent([...events, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexChildren, []);

  return (
    <div>
      <ChildrenNew onCreateChild={handleCreateChild} />
      <EventsNew />
      <ChildrenIndex children={children} />
    </div>
  );
}
