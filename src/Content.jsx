import axios from "axios";
import { useState, useEffect } from "react";
import { ChildrenIndex } from "./ChildrenIndex";
import { ChildrenNew } from "./ChildrenNew";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { ChildrenShow } from "./ChildrenShow";
import { Signup } from "./Signup";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [children, setChildren] = useState([]);
  const [isChildrenShowVisible, setIsChildrenShowVisible] = useState(false);
  const [currentChild, setCurrentChild] = useState({});

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
    axios.post("http://localhost:3000/events.json", params).then((response) => {
      const updatedChildEvents = [...currentChild["events"], response.data];
      setCurrentChild({ ...currentChild, events: updatedChildEvents });
      setChildren(
        children.map((child) => {
          if (child.id === currentChild.id) {
            child.events = updatedChildEvents;
          }
          return child;
        })
      );
      successCallback();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsChildrenShowVisible(false);
  };

  const handleShowChild = (child) => {
    console.log("handleShowChild", child);
    setIsChildrenShowVisible(true);
    setCurrentChild(child);
  };

  useEffect(handleIndexChildren, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addchild" element={<ChildrenNew onCreateChild={handleCreateChild} />} />
        <Route
          path="/children"
          element={
            <ChildrenIndex
              children={children}
              show={isChildrenShowVisible}
              onClose={handleClose}
              child={currentChild}
              onCreateEvent={handleCreateEvent}
              onShowChild={handleShowChild}
            />
          }
        />
      </Routes>
    </div>
  );
}
