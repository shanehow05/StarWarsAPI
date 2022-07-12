
import './App.css';
import React from 'react';
import Starships from './Components/Starships';
import { getAllStarships } from "./services/sw-api";
import { useState,useEffect } from "react";




 function App () {
  const [starship, setStarShip] = useState([]);



  useEffect (async () => {
      
      const ship = await getAllStarships()
      console.log(ship)
      setStarShip(ship.data.results)

  }, [])





  return (
   
      
      <div>
         {starship.map(ship => {
           return <Starships name = {ship.name}/>
          
          
           



         })}

      </div>


  )


}




export default App;
