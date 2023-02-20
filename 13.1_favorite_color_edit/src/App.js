import React, { useState, useEffect } from "react";

const App = () => {
  let [favoriteColor, setFavoriteColor] = useState("yellow");

  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor(() => (favoriteColor = "blue"));
    }, 1000);
  }, []);

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <div id="div"></div>
    </div>
  );
};

export default App;

// 1. Create in a component a state called “favoriteColor” and
// its value some color string.
// 2. In your, JSX creates an h1 element that will display your
// favorite color coming from the state. e.g. “My favorite
// color is blue”
// 3. In your, JSX create an empty div with an id attribute.
// 4. Just when the component mounts to the screen create a
// setTimeout function that will be invoked after 1 second.
// Inside your setTimeout function change the state’s value
// of your favoriteColor to some other color.
