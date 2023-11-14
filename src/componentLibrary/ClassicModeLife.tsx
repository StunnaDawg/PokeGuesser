import React from "react";
import { useClassicModeLife } from "../context";

const ClassicModeLife: React.FC = () => { 
    const {lives} = useClassicModeLife()
 return (
    <>
 <h1>Lives: </h1>
      {lives.map((life, index) => (
         <div key={index}>{life}</div>
      ))}
    </>
 )
}

export default ClassicModeLife