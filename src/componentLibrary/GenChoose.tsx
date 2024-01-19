import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"

type GenChooseProp = {
  setCategoryStart: Dispatch<SetStateAction<number>>
  setCategoryEnd: Dispatch<SetStateAction<number>>
  setClickedLink: Dispatch<SetStateAction<boolean>>
  imgLink: string
  imgAlt: string
  title: string
  categoryStart: number
  categoryEnd: number
  linkToName: string
}

const GenChoose = ({
  setCategoryStart,
  setCategoryEnd,
  setClickedLink,
  imgLink,
  imgAlt,
  title,
  categoryStart,
  categoryEnd,
  linkToName,
}: GenChooseProp) => {
  return (
    <div className="mx-2 text-center">
      <Link
        className=" text-2xl xl:text-4xl font-pokemon-solid"
        to={linkToName}
        onClick={() => {
          setCategoryStart(categoryStart),
            setCategoryEnd(categoryEnd),
            setClickedLink(true)
        }}
      >
        <img src={imgLink} alt={imgAlt} className="w-36 h-36 object-contain" />
        {/* <img
                    src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
                    alt="Blastoise"
                  /> */}
        {title}
      </Link>
    </div>
  )
}

export default GenChoose
