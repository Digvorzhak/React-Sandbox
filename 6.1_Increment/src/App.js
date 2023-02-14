import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(() => ++count);
  };
  return (
    <div>
      <button onClick={clickHandler}>Increment</button>
      <span>{count}</span>
    </div>
  );
}

export default App;
