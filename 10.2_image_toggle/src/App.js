import React, { useRef } from "react";
import bw1 from "./assets/bw1.jpg";
import bw2 from "./assets/bw2.jpg";
import color1 from "./assets/color1.jpg";
import color2 from "./assets/color2.jpg";
import "./App.css";

function App() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const handleMouseEnter = (imgRef, colorImage) => {
    imgRef.current.src = colorImage;
  };

  const handleMouseLeave = (imgRef, bwImage) => {
    imgRef.current.src = bwImage;
  };
  return (
    <div className="container">
      <img alt="" onMouseEnter={() => handleMouseEnter(img1Ref, color1)} onMouseLeave={() => handleMouseLeave(img1Ref, bw1)} ref={img1Ref} src={bw1}></img>
      {/* <div></div> */}
      <img alt="" onMouseEnter={() => handleMouseEnter(img2Ref, color2)} onMouseLeave={() => handleMouseLeave(img2Ref, bw2)} ref={img2Ref} src={bw2}></img>
    </div>
  );
}

export default App;
