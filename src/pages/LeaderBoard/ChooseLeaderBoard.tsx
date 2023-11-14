import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ChooseLeaderBoard = () => {
  return (
    <>
    <div className="flex-1 flex flex-row justify-center">
      <h1 className="underline">Welcome to the LeaderBoard</h1>
      </div>
      <ul className="flex-1 flex flex-row justify-center">
        <li className="mx-1">
          <Link to="all-gens">All Generations</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-1">Gen 1</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-2">Gen 2</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-3">Gen 3</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-4">Gen 4</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-5">Gen 5</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-6">Gen 6</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-7">Gen 7</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-8">Gen 8</Link>
        </li>
        <li className="mx-1">
          <Link to="gen-9">Gen 9</Link>
        </li>
      </ul>
      
      <Outlet />
    </>
  )
}

export default ChooseLeaderBoard
