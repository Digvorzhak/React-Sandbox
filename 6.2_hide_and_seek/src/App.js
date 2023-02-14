import React, { useState } from "react";
// import Box from "./Box";

function App() {
  let [toggle, setToggle] = useState(false);
  const display = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button className="btn" onClick={display}></button>
      {toggle && <div className="box"></div>}
    </div>
  );
}

export default App;
