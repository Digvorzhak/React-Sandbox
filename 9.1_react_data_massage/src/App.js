import React, { useState } from "react";
import data from "./data";
import Names from "./Name";
import Card from "./Card";

function App() {
  const [people, setPeople] = useState(data);

  function getAllNames(data) {
    return data.map((person) => person.name);
  }

  function getBornBefore1990(data) {
    return data.filter((person) => {
      const birthYear = new Date(person.birthday).getFullYear();
      return birthYear < 1990;
    });
  }

  const modifiedData = {
    allNames: getAllNames(data),
    bornBefore1990: getBornBefore1990(data),
  };

  return (
    <div>
      <Names names={modifiedData.allNames} />
      <Card people={modifiedData.bornBefore1990} />
    </div>
  );
}

export default App;
