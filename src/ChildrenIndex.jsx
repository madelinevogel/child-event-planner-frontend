export function ChildrenIndex(props) {
  return (
    <div>
      <h1>All Children</h1>
      {props.children.map((child) => (
        <div key={child.id}>
          <h2>{child.name}</h2>
          <img src={child.image} />
          <button onClick={() => props.onShowChild(child)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
