function Names(props) {
  return (
    <div>
      <h2>Names</h2>
      <ul>
        {props.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Names;
