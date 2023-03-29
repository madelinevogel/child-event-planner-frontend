import { Modal } from "./Modal";
import { ChildrenShow } from "./ChildrenShow";

export function ChildrenIndex(props) {
  return (
    <div className="container ">
      <div className="row align-items-center">
        {props.children.map((child) => (
          <div className="col" key={child.id}>
            <div className="card p-3 border bg-light" style={{ width: "18rem" }}>
              <img src={child.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{child.name}</p>
                <button onClick={() => props.onShowChild(child)}>More Info</button>
              </div>
            </div>
          </div>
        ))}
        <Modal show={props.show} onClose={props.onClose}>
          <ChildrenShow child={props.child} onCreateEvent={props.onCreateEvent} onShowChild={props.onShowChild} />
        </Modal>
      </div>
    </div>
  );
}
