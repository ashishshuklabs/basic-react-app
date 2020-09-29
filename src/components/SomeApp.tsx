import React, { useState } from "react";
import Ninjas from "./Ninjas";
import INinja from "./iNinja";
import AddNinja from "./AddNinja";
import iNinja from "./iNinja";
const SomeApp: React.FC = () => {
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
};

export default SomeApp;
