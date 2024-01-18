import React from "react"
import { useClassicModeLife } from "../context"

const ClassicModeLife: React.FC = () => {
  const { lives } = useClassicModeLife()
  return (
    <>
      <div className="flex flex-row items-center">
        {lives.map((life, index) => (
          <div key={index}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              className="xl:w-24 xl:h-24"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ClassicModeLife
