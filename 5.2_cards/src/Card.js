import "./Card.css";

const Card = (props) => {
  const cardClass = "card " + props.className;
  return (
    <div className={cardClass}>
      <img width="100px" src={props.background}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a target="_blank" href={props.share}>
        Share
      </a>{" "}
      <br></br> <br></br>
      <a target="_blank" href={props.exploreLink}>
        Explore
      </a>
    </div>
  );
};

export default Card;
