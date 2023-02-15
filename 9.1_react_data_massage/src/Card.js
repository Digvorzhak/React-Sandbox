function Card(props) {
  return (
    <div>
      <h2>People born before 1990</h2>
      {props.people.map((person) => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <p>Birthday: {person.birthday}</p>
          <p>Favorite meats: {person.favoriteFoods.meats.join(", ")}</p>
          <p>Favorite fish: {person.favoriteFoods.fish.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
