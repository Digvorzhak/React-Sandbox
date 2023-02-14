import React, { useState } from "react";

const Box = () => {
  let [toggle, setToggle] = useState(false);
  const display = () => {
    setToggle(() => {
      if (toggle) {
        toggle = false;
      } else {
        toggle = true;
      }
    });
  };

  return (
    <div>
      <button className="btn" onClick={display}></button>
      {toggle && <div className="box"></div>}
    </div>
  );
};

export default Box;
