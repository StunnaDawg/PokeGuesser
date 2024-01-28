import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { useLeaderBoardId } from "../context/leaderBoardContext"

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
  boardId: string
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
  boardId,
}: GenChooseProp) => {
  const { setBoardId } = useLeaderBoardId()
  return (
    <div className="mx-2 text-center">
      <Link
        className=" text-xl xl:text-4xl 2xl:text-5xl font-pokemon-solid"
        to={linkToName}
        onClick={() => {
          setBoardId(boardId)
          setCategoryStart(categoryStart),
            setCategoryEnd(categoryEnd),
            setClickedLink(true)
        }}
      >
        <img
          src={imgLink}
          alt={imgAlt}
          className="w-36 h-36 2xl:w-64 2xl:h-64 object-contain"
        />
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
