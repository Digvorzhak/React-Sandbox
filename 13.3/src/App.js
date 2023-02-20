import React, { useState, useEffect } from "react";

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const [isCircle, setIsCircle] = useState(false);
  const colors = ["green", "yellow", "red", "blue", "orange", "purple"];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => prevIndex + 1);
    }, 500);
    if (colorIndex >= 5) {
      setIsCircle(true);
    }
    return () => clearInterval(colorInterval);
  }, [colorIndex]);

  const currentColor = colors[colorIndex % colors.length];
  const boxClasses = `box1 ${currentColor} ${isCircle ? "circle" : ""}`;
  return (
    <div>
      <div className={boxClasses}></div>
    </div>
  );
}

export default App;
