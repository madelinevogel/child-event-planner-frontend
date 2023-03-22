export function ChildrenNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateChild(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add Child</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit">Create Child</button>
      </form>
    </div>
  );
}
