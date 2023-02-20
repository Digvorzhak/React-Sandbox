import React, { useState, useEffect } from "react";
import CountDown from "./CountDown";

function App() {
  return (
    <div>
      <CountDown seconds={90}></CountDown>
    </div>
  );
}

export default App;
