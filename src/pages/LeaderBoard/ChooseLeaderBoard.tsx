import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ChooseLeaderBoard = () => {
  const [clickedLink, setClickedLink] = useState<boolean>(false)
  return (
    <>
    {!clickedLink ? (
      <>
      <h1>Welcome to the LeaderBoard</h1>
      <ul>
        <li>
          <Link
            to="all-gens"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            All Generations
          </Link>
        </li>
        <li>
          <Link
            to="gen-1"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 1
          </Link>
        </li>
        <li>
          <Link
            to="gen-2"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 2
          </Link>
        </li>
        <li>
          <Link
            to="gen-3"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 3
          </Link>
        </li>
        <li>
          <Link
            to="gen-4"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 4
          </Link>
        </li>
        <li>
          <Link
            to="gen-5"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 5
          </Link>
        </li>
        <li>
          <Link
            to="gen-6"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 6
          </Link>
        </li>
        <li>
          <Link
            to="gen-7"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 7
          </Link>
        </li>
        <li>
          <Link
            to="gen-8"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 8
          </Link>
        </li>
        <li>
          <Link
            to="gen-9"
            onClick={() => {
              setClickedLink(true)
            }}
          >
            Gen 9 - A few pokemon are missing
          </Link>
        </li>
      </ul>
      </>
    ) : <Outlet />}
    </>
  )
}

export default ChooseLeaderBoard
