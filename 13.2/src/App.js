import React, { useState, useEffect } from "react";

function App() {
  const [className, setClassName] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setClassName("box");
      setTimeout(() => setClassName(""), 4000);
    }, 1000);
  }, []);

  return (
    <div>
      <div className={`box1 ${className}`}></div>
      <div className={`box2 ${className}`}></div>
      <div className={`box3 ${className}`}></div>
    </div>
  );
}

export default App;
