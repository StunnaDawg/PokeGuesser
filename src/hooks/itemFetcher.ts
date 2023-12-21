import { Dispatch, SetStateAction } from "react"

const useItemSpriteFetcher = (
  setItemSprite: Dispatch<SetStateAction<string>>
) => {
  setItemSprite(`https://pokeapi.co/media/sprites/items/${setItemSprite}.png`)
}

export default useItemSpriteFetcher
