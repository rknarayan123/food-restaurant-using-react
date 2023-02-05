import React, { useState } from 'react'
import "./r.css"
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
 const Rest = () => {
  const [menuData,setMenuData]=useState(Menu);    //hooks should be written in top hierarchy i.e. after function iy cant be written after return shows error..
  const a=(category) => {
    const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
    }); 
    setMenuData(updatedList);
  };
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>a("breakfast")}>Breakfast</button> 
        <button className="btn-group__item" onClick={()=>a("lunch")}>lunch</button>
        <button className="btn-group__item" onClick={()=>a("evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>a("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>a("MenuCard")}>All</button>

      </div>
    </nav>
  <MenuCard a={menuData}/>
    </>
  );
};

export default Rest


