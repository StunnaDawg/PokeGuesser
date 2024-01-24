import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"

type LeaderBoardProp = {
  setClickedLink: Dispatch<SetStateAction<boolean>>
  imgLink: string
  imgAlt: string
  title: string
  board: string
}

const LeaderBoardChoose = ({
  setClickedLink,
  imgLink,
  imgAlt,
  title,
  board,
}: LeaderBoardProp) => {
  return (
    <div className="mx-2 text-center">
      <Link
        className=" text-xl xl:text-4xl 2xl:text-5xl font-pokemon-solid"
        to={board}
        onClick={() => {
          setClickedLink(true)
        }}
      >
        <img
          src={imgLink}
          alt={imgAlt}
          className="w-36 h-36 2xl:w-64 2xl:h-64 object-contain"
        />
        {title}
      </Link>
    </div>
  )
}

export default LeaderBoardChoose
