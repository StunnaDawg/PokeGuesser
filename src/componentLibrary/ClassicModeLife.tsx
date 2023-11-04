import React from "react";
import { useClassicModeLife } from "../context";

const ClassicModeLife: React.FC = () => { 
    const {lives, setLives} = useClassicModeLife()
 return (
    <>
 <h1>Lives: </h1>
    {lives.map((life, index) => (  
        <div key={index}>life{life}</div>
    ))}
    </>
 )
}

export default ClassicModeLife