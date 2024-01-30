type PokeColumnProps = {
  pokemon1: string
  pokemon2: string
  pokemon3: string
}

const PokeColumn = ({ pokemon1, pokemon2, pokemon3 }: PokeColumnProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={`https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemon1}.png`}
        alt={pokemon1}
        className="w-32 h-32 2xl:w-72 2xl:h-72 object-contain m-4"
      />
      <img
        src={`https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemon2}.png`}
        alt={pokemon2}
        className="w-32 h-32 2xl:w-72 2xl:h-72 object-contain m-4"
      />
      <img
        src={`https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemon3}.png`}
        alt={pokemon3}
        className="w-32 h-32 2xl:w-72 2xl:h-72 object-contain m-4"
      />
    </div>
  )
}

export default PokeColumn
