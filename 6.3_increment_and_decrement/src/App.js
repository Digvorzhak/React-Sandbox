import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > -10) {
      setCount(count - 1);
    }
  };

  function color() {
    if (count === 0) {
      return "black";
    }
    if (count > 0) {
      return "green";
    }
    if (count < 0) {
      return "red";
    }
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <span className={color()}>{count}</span>
    </div>
  );
}
export default App;

// We want to create two buttons and one label.
// The first button will increment the counter.
// The second button will decrement the counter
// A label that displays the current value.
// The counter range can only be from -10 to 10.
// If the counter is negative the label will be a red color.
// If the counter is positive the label will be a green color.
// If the counter is 0 the label will be black in color
