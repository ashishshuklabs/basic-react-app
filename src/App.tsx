import React, { useState } from "react";
import Ninjas from "../src/components/Ninjas";
import INinja from "../src/components/iNinja";
import AddNinja from "../src/components/AddNinja";
import iNinja from "../src/components/iNinja";
function App() {
  const [ninjas, setNinjas] = useState<INinja[]>([
    { name: "ash", age: "18", belt: "red", id: 1 },
    { name: "blane", age: "20", belt: "yellow", id: 2 },
    { name: "kick", age: "35", belt: "black", id: 3 },
  ]);
  const addNinja = (ninja: iNinja) => {
    ninja.id = Math.random();
    let newNinjas = [...ninjas, ninja];
    setNinjas(newNinjas);
  };

  const deleteNinja = (id: number) => {
    let newNinjas = ninjas.filter((ninja) => {
        return id !== ninja.id
    });
    setNinjas(newNinjas);
  };
  return (
    <div>
      <Ninjas ninjas={ninjas} deleteNinja={deleteNinja} />
      <AddNinja addNinja={addNinja} />
    </div>
  );
}

export default App;
