import "./Button.css";

const Button = (props) => {
  const classes = "btn-" + props.className;
  return <button className={classes}>{props.text}</button>;
};

export default Button;
