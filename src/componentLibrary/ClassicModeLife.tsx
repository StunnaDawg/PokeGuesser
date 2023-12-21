import React from "react"
import { useClassicModeLife } from "../context"

const ClassicModeLife: React.FC = () => {
  const { lives } = useClassicModeLife()
  return (
    <>
      <h1>Lives: </h1>
      {lives.map((life, index) => (
        <div key={index}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" />
        </div>
      ))}
    </>
  )
}

export default ClassicModeLife
