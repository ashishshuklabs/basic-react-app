import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import iNinja from "./iNinja";
interface IProps {
  addNinja: (ninja: iNinja) => void;
}
//This is a form component that manages its own state
const AddNinja: React.FC<IProps> = ({ addNinja }) => {
    const [ninja, setNinja] = useState<iNinja>({
      name: "",
      belt: "",
      age: "",
      id: 0,
    });
  //Setting properties dynamically using event target object
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    //newNinja = {...sampleNinja,[id]:value}   
     setNinja({ ...ninja, [id]: value });
  };
  
  const handleSubmit = (e: FormEvent) => {
    
    e.preventDefault();
    addNinja(ninja);
    
  };

  const handleMouseOver = (e: MouseEvent) => {
    console.log(e.pageX);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="name">Age:</label>
        <input type="text" id="age" onChange={handleChange} />
        <label htmlFor="name">Belt:</label>
        <input type="text" id="belt" onChange={handleChange} />
        <button onMouseOver={handleMouseOver}>Submit</button>
      </form>
    </div>
  );
};

export default AddNinja;
