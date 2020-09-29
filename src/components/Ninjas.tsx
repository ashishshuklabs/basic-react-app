import React from 'react';
import INinja from './iNinja';
interface IProps{
   ninjas:INinja[];
   deleteNinja: (id:number) => void;
}
const Ninjas: React.FC<IProps> = ({ninjas, deleteNinja}) =>{
    const ninjaList = ninjas.map(ninja=>{
        return (
        <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age:{ninja.age}</div>
            <div>belt:{ninja.belt}</div>
            <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
        );
    });
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    );
}

export default Ninjas;